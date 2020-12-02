import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: baseTheme.colors.primary.white,
    },
    wrapper: {
        width: '100%',
        height: baseTheme.dimensions.heights.formTwoLinesFields,
        flexDirection: 'row',
    },
    bordered: {
        borderTopWidth: baseTheme.dimensions.borderWidths.formFields,
        borderTopColor: baseTheme.colors.primary.carlo,
    },
    textContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        paddingRight: baseTheme.metrics.paddings.containers,
        justifyContent: 'center'
    },
    textWrapper: {
        flexGrow: 1,
        flexBasis: 0,
        justifyContent: 'center',
        paddingVertical: baseTheme.metrics.paddings.formFieldsVertical / 2
    },
    label: {
        fontFamily: baseTheme.fonts.caption.fontFamily,
        fontSize: baseTheme.fonts.caption.fontSize,
        color: baseTheme.colors.primary.oracle,
        textAlignVertical: 'bottom',
    },
    text: {
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
        textAlignVertical: 'center'
    },
    checkBoxContainer: {
        width: baseTheme.dimensions.widths.checkBox,
        height: '100%',
        justifyContent: 'center',
    },
    checkBoxIcon: {
        fontSize: baseTheme.materialIcons.sizes.checkbox,
        lineHeight: baseTheme.dimensions.heights.formTwoLinesFields - baseTheme.metrics.paddings.formFieldsVertical / 2
    },
    checkBoxChecked: {
        color: baseTheme.colors.primary.cyan,
    },
    checkBoxNotChecked: {
        color: baseTheme.colors.primary.oracle,
    },
});
