import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: baseTheme.dimensions.heights.formFields,
        flexDirection: 'row',
    },
    textContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    text: {
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue
    },
    switchContainer: {
        justifyContent: 'center',

    },
});
