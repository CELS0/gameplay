import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        alignItems: 'center',
    },
    form: {
        marginHorizontal: 24,
        marginTop: 32,
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 58,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    image: {
        width: 64,
        height: 58,
        backgroundColor: theme.colors.secondary50,
        borderRadius: 8,
        borderWidth: 1,
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    }
})