import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

const charContainerBorderWidth = 1.5;
const charContainerWidth = 44 - charContainerBorderWidth;
const charContainerHeight = 56 - charContainerBorderWidth;

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: charContainerHeight,
        justifyContent: 'center',
        marginTop: baseTheme.metrics.margins.formElements
    },
    wrapper: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        position: 'relative',
        overflow: 'hidden',
    },
    input: {
        width: charContainerWidth * 6 + 24,
        height: charContainerHeight,
        position: 'absolute',
        left: '50%',
        right: 0,
        marginLeft: -(charContainerWidth * 6 + 24) / 2,
        letterSpacing: charContainerWidth,
        opacity: 0
    },
    pinWrapper: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    charContainer: {
        width: charContainerWidth,
        height: charContainerHeight,
        borderBottomWidth: charContainerBorderWidth,
        borderBottomColor: baseTheme.colors.primary._500,
        marginHorizontal: 4
    },
    active: {
    },
    inactive: {
    },
    char: {
        flexGrow: 1,
        textAlign: 'center',
        fontFamily: baseTheme.fonts.h4.fontFamily,
        fontSize: baseTheme.fonts.h4.fontSize,
        color: baseTheme.colors.primary._900,
    }
});
