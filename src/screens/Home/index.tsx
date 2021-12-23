import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Load';

export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    function handlerCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];


        if (category) {
            setAppointments(storage.filter(item => item.category === category))
        } else {
            setAppointments(storage)
        }
        setLoading(false)
    }

    useFocusEffect(
        useCallback(() => {
            loadAppointments();
        }, [category])
    )

    const navigation = useNavigation();

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
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
            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title='Partidas agendadas'
                            subtitle={`Total ${appointments.length}`}
                        />
                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    onPress={() => handleAppointmentDetails(item)}
                                    data={item}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            style={styles.matches}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }
        </Background>
    )
}