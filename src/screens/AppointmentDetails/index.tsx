import React, { useEffect, useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Text, ImageBackground, View, FlatList, Alert, Share } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { Members, MembersProps } from '../../components/Members';
import { ListDivider } from '../../components/ListDivider';
import { Buttonicon } from '../../components/Buttonicon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Load';

type Params = {
    guildSelected: AppointmentProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MembersProps[];
}

export function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading] = useState(true)
    const route = useRoute();
    const { guildSelected } = route.params as Params;

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
            setWidget(response.data);
        } catch {
            Alert.alert('Verifique as configurações do servidor, Será que o Widget está habilitado?')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchGuildWidget();
    }, [])

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>{guildSelected.guild.name}</Text>
                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>
            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title="Jogadores"
                            subtitle={`Total ${widget.members.length}`}
                        />
                        <FlatList
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Members data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider isCentered />}
                            style={styles.members}
                        />
                    </>
            }
            <View style={styles.footer}>
                <Buttonicon
                    title="Entrar na partida"
                />
            </View>

        </Background>
    )
}

