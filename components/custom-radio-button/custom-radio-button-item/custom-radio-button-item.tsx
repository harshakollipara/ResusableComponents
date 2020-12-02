import React, { Component, Fragment } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { style } from './style';
import HeaderGradientBackground from '../../gradients/header-gradient-background/header-gradient-background';

interface CustomRadioButtonItemProps {
    model: {
        label: string,
        text: string,
        message?: string
    };
    isSelected: boolean;
    index: number;
    isFirstItem: boolean;
    onPress: (value: number) => void;
}

interface CustomRadioButtonItemState {
}

export default class CustomRadioButtonItem extends Component<CustomRadioButtonItemProps, CustomRadioButtonItemState> {

    constructor(props: CustomRadioButtonItemProps) {
        super(props);
        this.state = {
        }
    }

    private updateParentState = (value: number) => {
        this.props.onPress(value);
    }

    render() {

        return (
            <TouchableWithoutFeedback style={style.container} onPress={() => { this.updateParentState(this.props.index) }}>
                <View style={[style.wrapper, !this.props.isFirstItem && style.bordered]}>
                    <View style={style.textContainer}>
                        <Text style={[style.textWrapper, style.label]} numberOfLines={1}>{this.props.model.label}</Text>
                        <Text style={[style.textWrapper, style.text]} numberOfLines={1}>{this.props.model.text}</Text>
                    </View>
                    <View style={style.radioContainer}>
                        <View style={[style.radioBox, this.props.isSelected ? style.radioBoxChecked : style.radioBoxNotChecked]}>
                            <View style={this.props.isSelected && style.radioChecked}></View>
                        </View>
                    </View>
                    {this.props.model.message != undefined && this.props.model.message.length > 0 && (
                        <View style={style.messageContainer}>
                            <HeaderGradientBackground />
                            <Text style={style.messageText}>{this.props.model.message}</Text>
                        </View>
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


