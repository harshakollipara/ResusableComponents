import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        borderBottomWidth: baseTheme.dimensions.borderWidths.formFields,
        borderBottomColor: baseTheme.colors.primary.oracle,
        flexDirection: 'row',
    },
    iconContainer: {
        width: 48,
        height: 48,
        alignContent: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        flexGrow: 1,
        flexBasis: 0,
    },
    icon: {
        fontSize: baseTheme.materialIcons.sizes.primary,
        color: baseTheme.colors.primary.cyan,
        textAlign: 'right',
    },
    textInput: {
        flexGrow: 1,
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
    },


});
