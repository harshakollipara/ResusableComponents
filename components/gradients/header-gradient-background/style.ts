import { StyleSheet } from 'react-native';
import { baseTheme } from '../../../styles/baseTheme';

export const style = StyleSheet.create({
    gradient: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: baseTheme.colors.primary._500,
    },
});
