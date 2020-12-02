import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    button: {
        width: '100%',
        height: baseTheme.dimensions.heights.buttons,
        backgroundColor: baseTheme.colors.primary.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rounded: {
        borderRadius: baseTheme.dimensions.borderRadiuses.buttons,
    },
    outline: {
        backgroundColor: baseTheme.colors.primary.azure,
        borderWidth: baseTheme.dimensions.borderWidths.buttons,
        borderColor: baseTheme.colors.primary.cyan,
    },
    text: {
        fontFamily: baseTheme.fonts.button.fontFamily,
        fontSize: baseTheme.fonts.button.fontSize,
        color: baseTheme.colors.primary.azure,
        textTransform: 'uppercase',
    },
    textOutline: {
        fontFamily: baseTheme.fonts.button.fontFamily,
        fontSize: baseTheme.fonts.button.fontSize,
        color: baseTheme.colors.primary.cyan,
        textTransform: 'uppercase',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    disabled: {
        opacity: baseTheme.decorations.opacity.disabledButtons,
    },
    hidden: {
        display: 'none',
    },
});