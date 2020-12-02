import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    body: {
        flexGrow: 1,
        position: 'relative',
        paddingHorizontal: baseTheme.metrics.paddings.bodyHorizontal,
        paddingVertical: baseTheme.metrics.paddings.bodyVertical,
        backgroundColor: baseTheme.colors.primary.white,
    },
});
