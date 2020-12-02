import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    textInputAndroid: {
        flexGrow: 1,
        height: baseTheme.dimensions.heights.formFields,
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
        justifyContent: 'center',
    },
    textInputIOS: {
        flexGrow: 1,
        height: baseTheme.dimensions.heights.formFields,
        lineHeight: baseTheme.dimensions.heights.formFields,
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0
    },
    arrowIOS: {
        position: 'absolute',
        top: 10,
        right: baseTheme.metrics.margins.containers
    },
    dropdownIOS: {
        color: 'transparent',
        height: baseTheme.dimensions.heights.formFields,
        flexGrow: 1,
        flexBasis: 1,
        overlayColor: 'hidden'
    },
});
