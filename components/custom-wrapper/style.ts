import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const style = StyleSheet.create({
    wrapper: {
        width: '100%',
        position: 'relative',
    },
    paddingHorizontal: {
        paddingHorizontal: baseTheme.metrics.paddings.wrapperHorizontal,
    },
    paddingVertical: {
        paddingVertical: baseTheme.metrics.paddings.wrapperVertical,
    },
});
