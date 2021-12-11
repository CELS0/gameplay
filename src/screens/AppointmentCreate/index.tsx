import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';

import { RectButton } from 'react-native-gesture-handler'
import { CategorySelect } from '../../components/CategorySelect';
import { useState } from 'react';
import { theme } from '../../global/styles/theme';
import { GuildIcon } from '../../components/GuildIcon';
import { Smallinput } from '../../components/Smallinput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModa, setOpenGuildsModa] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handlerOpenGuilds(){
        setOpenGuildsModa(true);
    }
    function handlerCloseGuilds(){
        setOpenGuildsModa(false);
    }

    function handlerGuildsSelect(guildSelect: GuildProps){
        setGuild(guildSelect);
        setOpenGuildsModa(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <Header
                    title="Agendar partida"
                />

                <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 24 }]}>Categoria</Text>

                <CategorySelect
                    hasCheckBox
                    setCategory={setCategory}
                    categorySelected={category}
                />

                <View style={styles.form}>
                    <RectButton
                    onPress={handlerOpenGuilds}
                    >
                        <View style={styles.select}>
                           { 
                          guild.icon ? <GuildIcon/> : 
                          
                          <View style={styles.image} />
                           }

                            <View style={styles.selectBody}
                            >
                                <Text style={styles.label}>
                                    {guild.name ? guild.name :'Selecionar um servidor'}
                                </Text>
                            </View>
                            <Feather
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                            />
                        </View>
                    </RectButton>
                    <View style={styles.field}>
                        <View>
                            <Text style={[styles.label, { marginBottom: 8 }]}>
                                Dia e Mês
                            </Text>
                            <View style={styles.column}>
                                <Smallinput maxLength={2} />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <Smallinput maxLength={2} />
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.label, { marginBottom: 8 }]}>
                                Hora e minutos
                            </Text>
                            <View style={styles.column}>
                                <Smallinput maxLength={2} />
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <Smallinput maxLength={2} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.label, { marginTop: 8, marginBottom: 8 }]}>
                            Descrição
                        </Text>
                        <Text style={styles.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>
                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />
                    <View style={styles.footer}>
                        <Button title="Agendar" />
                    </View>
                </View>
            </ScrollView>
            <ModalView visible={openGuildsModa} closeModal={handlerCloseGuilds}>
                <Guilds handlerGuildsSelect = {handlerGuildsSelect}/>
            </ModalView>
        </KeyboardAvoidingView>
    )
}