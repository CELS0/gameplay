import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Background } from '../../components/Background';
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
import { useNavigation } from '@react-navigation/native';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
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
    const navigation = useNavigation();
    function handleGuilds() {
        navigation.navigate('Guilds');
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
                    onPress={handleGuilds}
                    >
                        <View style={styles.select}>
                            <GuildIcon />
                            {/* <View style={styles.image} /> */}
                            <View style={styles.selectBody}
                            >
                                <Text style={styles.label}>
                                    Selecionar um servidor
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
        </KeyboardAvoidingView>
    )
}