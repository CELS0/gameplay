import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',
       paddingTop: getStatusBarHeight() + 24,
    },
    guilds:{
        width: '100%',
    }
})