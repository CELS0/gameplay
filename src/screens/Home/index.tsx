import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                owner: false,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: ' É hoje que vamos chegar ao challenger sem perder uma partida da md10 🔥'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: ' É hoje que vamos chegar ao challenger sem perder uma partida da md10 🔥'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                owner: false,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: ' É hoje que vamos chegar ao challenger sem perder uma partida da md10 🔥'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                owner: false,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: ' É hoje que vamos chegar ao challenger sem perder uma partida da md10 🔥'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                owner: false,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: ' É hoje que vamos chegar ao challenger sem perder uma partida da md10 🔥'
        },
    ]

    function handlerCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    const navigation = useNavigation();

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={handleAppointmentCreate}
                />
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handlerCategorySelect}
            />
            <ListHeader
                title='Partidas agendadas'
                subtitle={`Total 6${appointments.length}`}
            />
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment
                        onPress={handleAppointmentDetails}
                        data={item}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                contentContainerStyle={{ paddingBottom: 69 }}
                showsVerticalScrollIndicator={false}
            />
        </Background>
    )
}