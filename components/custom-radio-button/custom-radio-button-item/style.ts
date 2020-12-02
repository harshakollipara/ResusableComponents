import { StyleSheet } from 'react-native';
import { baseTheme } from '../../../styles/baseTheme';

const messageLabelSize = 22;

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
        borderTopColor: baseTheme.colors.primary.whisper,
    },
    textContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        paddingRight: baseTheme.metrics.paddings.containers,
        paddingVertical: baseTheme.metrics.paddings.containers / 2,
        justifyContent: 'center',
    },
    textWrapper: {
        flexGrow: 1,
        maxWidth: '90%',
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
        textAlignVertical: 'top',
    },
    radioContainer: {
        width: baseTheme.dimensions.widths.radio + baseTheme.dimensions.borderWidths.radio,
        height: '100%',
        justifyContent: 'center',
    },
    radioBox: {
        width: baseTheme.dimensions.widths.radio,
        height: baseTheme.dimensions.heights.radio,
        borderRadius: baseTheme.dimensions.widths.radio / 2,
        borderWidth: baseTheme.dimensions.borderWidths.radio,
        padding: baseTheme.dimensions.borderWidths.radio * 1.5,
    },
    radioBoxChecked: {
        borderColor: baseTheme.colors.primary.cyan,
    },
    radioBoxNotChecked: {
        borderColor: baseTheme.colors.primary.oracle,
    },
    radioChecked: {
        flex: 1,
        borderRadius: baseTheme.dimensions.widths.radio / 2,
        backgroundColor: baseTheme.colors.primary.cyan,
    },
    messageContainer: {
        position: 'absolute',
        height: messageLabelSize,
        borderRadius: messageLabelSize / 2,
        top: '50%',
        marginTop: -messageLabelSize / 2,
        right: baseTheme.dimensions.widths.radio + baseTheme.metrics.paddings.containers,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    messageText: {
        fontFamily: baseTheme.fonts.button.fontFamily,
        fontSize: baseTheme.fonts.button.fontSize,
        color: baseTheme.colors.primary.white,
        paddingHorizontal: baseTheme.metrics.paddings.containers,
        textTransform: 'uppercase'
    }
});
