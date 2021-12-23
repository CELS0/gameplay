import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Text, ImageBackground, View, FlatList } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { Members } from '../../components/Members';
import { ListDivider } from '../../components/ListDivider';
import { Buttonicon } from '../../components/Buttonicon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';

type Params = {
    guildSelected: AppointmentProps
}

export function AppointmentDetails() {

    const route = useRoute();
    const { guildSelected } = route.params as Params;
    const members = [
        {
            id: '1',
            username: 'CELS0',
            avatar_url: 'https://github.com/CELS0.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'ViniciusMazon',
            avatar_url: 'https://github.com/ViniciusMazon.png',
            status: 'offline'
        },
        {
            id: '3',
            username: 'breno44',
            avatar_url: 'https://github.com/breno44.png',
            status: 'online'
        }
    ]


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
                    <Text style={styles.title}>Lendários</Text>
                    <Text style={styles.subtitle}>
                        Hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle={`Total ${members.length}`}
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Members data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <Buttonicon
                    title="Entrar na partida"
                />
            </View>
        </Background>
    )
}

