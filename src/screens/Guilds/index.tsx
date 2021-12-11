import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { GuildIcon } from '../../components/GuildIcon';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
    handlerGuildsSelect: (guild: GuildProps) => void;
}

export function Guilds({ handlerGuildsSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendarios',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '2',
            name: 'Mercenário',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '3',
            name: 'Mercenário',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '4',
            name: 'Mercenário',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '5',
            name: 'Mercenário',
            icon: 'image.png',
            owner: true,
        }
    ]
    return (
        <View style={styles.container}>



            <FlatList

                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <Guild
                        data={item}
                        onPress={() => handlerGuildsSelect(item)}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                ListHeaderComponent={()=><ListDivider isCentered/>}
                style={styles.guilds}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 69, paddingTop:103 }}
            />
        </View>
    )
}
