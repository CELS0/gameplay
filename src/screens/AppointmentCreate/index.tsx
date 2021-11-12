import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, ImageBackground, View, FlatList } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { styles } from './styles';

import { RectButton } from 'react-native-gesture-handler'
import { CategorySelect } from '../../components/CategorySelect';
import { useState } from 'react';
import { theme } from '../../global/styles/theme';

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


    return (
        <Background>
            <Header
                title="Agendar partida"
            />

            <Text style={styles.label}>Categoria</Text>

            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image} />
                        <View style={styles.selectBody}>
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
            </View>
        </Background>
    )
}