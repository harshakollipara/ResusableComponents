import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexGrow: 1,
    },
    signum: {
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
    },
    currency: {
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
        paddingRight: baseTheme.metrics.paddings.containers / 2,
    },
    textInput: {
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    textInputMargin: {
        marginLeft: -baseTheme.metrics.paddings.containers
    }
});
