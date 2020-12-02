import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Alert } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { style } from './style';

interface CustomCheckBoxProps {
    label?: string,
    text: string,
    onChangeValue: (value: boolean) => void;
    isSelected: boolean;
}

interface CustomCheckBoxState {
    isSelected: boolean;
}

export default class CustomCheckBox extends Component<CustomCheckBoxProps, CustomCheckBoxState> {

    constructor(props: CustomCheckBoxProps) {
        super(props);
        this.state = { isSelected: this.props.isSelected };
    }

    private updateParentState = (value: boolean) => {
        this.props.onChangeValue(value);
    }

    render() {

        return (
            <TouchableWithoutFeedback style={style.container} onPress={() => {
                this.setState({ isSelected: !this.state.isSelected });
                this.updateParentState(!this.state.isSelected);
            }}>
                <View style={style.wrapper}>
                    <View style={style.textContainer}>
                        {this.props.label && (
                            <Text style={[style.textWrapper, style.label]}>{this.props.label}</Text>
                        )}
                        <Text style={[style.textWrapper, style.text]}>{this.props.text}</Text>
                    </View>
                    <View style={style.checkBoxContainer}>
                        <MaterialIcons name={this.props.isSelected ? 'check-box' : 'check-box-outline-blank'} style={[style.checkBoxIcon, this.props.isSelected ? style.checkBoxChecked : style.checkBoxNotChecked]} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


