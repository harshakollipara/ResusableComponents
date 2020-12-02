import React, { Component } from 'react';
import { style } from './style';
import { baseTheme } from '../../styles/baseTheme';
import { View, Text, Switch } from 'react-native';

interface CustomToggleButtonProps {
    label: string;
    onChangeValue: (value: boolean) => void;
    value?: boolean;
    disabled?: boolean;
}

interface CustomToggleButtonState {
    value: boolean;
}

export default class CustomToggleButton extends Component<CustomToggleButtonProps, CustomToggleButtonState> {

    constructor(props: CustomToggleButtonProps) {
        super(props);
        this.state = {
            value: this.props.value || false,
        }
    }


    render() {
        return (
            <View style={style.container}>
                <View style={style.textContainer}>
                    <Text style={style.text}>{this.props.label}</Text>
                </View>
                <View style={style.switchContainer}>
                    <Switch
                        onValueChange={(value) => {
                            this.props.onChangeValue(value);
                            this.setState({
                                value: value
                            })
                        }}
                        value={this.props.value != undefined ? this.props.value : this.state.value}
                        disabled={this.props.disabled}
                    />
                </View>
            </View>
        );
    }
}
