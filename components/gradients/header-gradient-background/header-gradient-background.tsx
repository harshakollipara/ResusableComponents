import React, { Component, Fragment } from 'react';
import Svg, { Defs, LinearGradient, Stop, Rect, RadialGradient } from 'react-native-svg';
import { baseTheme } from '../../../styles/baseTheme';
import { style } from './style';
import { Platform } from 'react-native';

interface HeaderGradientBackgroundProps {
}

interface HeaderGradientBackgroundState {
}

export default class HeaderGradientBackground extends Component<HeaderGradientBackgroundProps, HeaderGradientBackgroundState> {
    constructor(props: HeaderGradientBackgroundProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>

                {Platform.OS == 'ios' && (
                    <Svg style={style.gradient}>
                        <Defs>
                            <RadialGradient id='grad'
                                cx='20%'
                                cy='20%'
                                rx='80%'
                                ry='180%'
                                fx='0%'
                                fy='0%'
                                gradientUnits='userSpaceOnUse'
                            >
                                <Stop offset='0%' stopColor={baseTheme.colors.other.colors.success} />
                                <Stop offset='100%' stopColor={baseTheme.colors.primary._500} />
                            </RadialGradient>
                        </Defs>
                        <Rect fill='url(#grad)' width='100%' height='100%' />
                    </Svg>
                )}
                {Platform.OS == 'android' && (
                    <Svg style={style.gradient}>
                        <Defs>
                            <RadialGradient id='grad'
                                cx='0%'
                                cy='80%'
                                rx='90%'
                                ry='120%'
                                fx='100%'
                                fy='80%'
                                gradientUnits='userSpaceOnUse'
                            >
                                <Stop offset='0%' stopColor={baseTheme.colors.other.colors.success} />
                                <Stop offset='100%' stopColor={baseTheme.colors.primary._500} />
                            </RadialGradient>
                        </Defs>
                        <Rect fill='url(#grad)' width='100%' height='100%' />
                    </Svg>
                )}
            </Fragment>

        );
    }
}
