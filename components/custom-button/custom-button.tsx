import React, { Component, Fragment } from 'react';
import { Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import { style } from './style';
import { baseTheme } from '../../styles/baseTheme';

interface CustomButtonProps {
    onPress: () => void;
    text: string;
    outline?: boolean;
    disabled?: boolean;
    loading?: boolean;
    rounded?: boolean;
    shadow?: boolean;
}

interface CustomButtonState {
}

export default class CustomButton extends Component<CustomButtonProps, CustomButtonState> {
    constructor(props: CustomButtonProps) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                style={[style.button, this.props.outline && style.outline, this.props.disabled && style.disabled, this.props.rounded && style.rounded, this.props.shadow && style.shadow]}
                underlayColor={baseTheme.colors.primary.monte_carlo}
                disabled={this.props.disabled}

            >
                <Fragment>
                    <Text style={[!this.props.outline ? style.text : style.textOutline, this.props.loading && style.hidden]}>{this.props.text}</Text>
                    <ActivityIndicator style={!this.props.loading && style.hidden} color={baseTheme.colors.primary.sugar_cane} />
                </Fragment>
            </TouchableHighlight>
        );
    }
}