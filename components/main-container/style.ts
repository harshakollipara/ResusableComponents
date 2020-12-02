import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme;

export const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent'
    },
    wrapper: {
        flexGrow: 1,
        height: baseTheme.dimensions.heights.buttons,
        overflow: 'hidden',
    },
    button: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: baseTheme.colors.other.colors.success,
    },
    outline: {
        backgroundColor: baseTheme.colors.primary._00,
        borderWidth: baseTheme.dimensions.borderWidths.buttons,
        borderColor: baseTheme.colors.other.colors.success,
    },
    text: {
        fontFamily: baseTheme.fonts.button.fontFamily,
        fontSize: baseTheme.fonts.button.fontSize,
        color: baseTheme.colors.primary._00,
        textTransform: 'uppercase',
    },
    textOutline: {
        fontFamily: baseTheme.fonts.button.fontFamily,
        fontSize: baseTheme.fonts.button.fontSize,
        color: baseTheme.colors.other.colors.success,
    },
    disabled: {
        opacity: baseTheme.decorations.opacity.disabledButtons,
    },
    hidden: {
        display: 'none',
    },
});
