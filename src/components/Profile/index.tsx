import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { ButtonAdd } from '../ButtonAdd';
import { styles } from './styles';

export function Profile() {
    return (
        <View style={styles.container} >

            <Avatar urlImage='https://github.com/CELS0.png' />
            <View>
                <View style={styles.user}>
                    
                    <Text style={styles.greeting}>
                        Olá
                    </Text>
                    <Text style={styles.username}>
                        Celso Jr
                    </Text>
                </View>
                
                <Text style={styles.message}>
                    Vamos jogar hoje!!
                </Text>
            </View>
        </View>
    )
}