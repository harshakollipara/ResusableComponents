import 'intl';
import 'intl/locale-data/jsonp/it-IT';
import React, { Component } from 'react';
import { Animated, Platform, TextInput, View, Text } from 'react-native';
import FormAnimationManager from '../common/form-animation-manager';
import { sharedStyle } from '../common/shared-style';
import { style } from './style';

interface CustomAmountFieldProps {
    label: string;
    placeholder: string;
    currency?: string;
    onChangeText: (value: string) => void;
    value?: string;
    disabled?: boolean;
    autofocus?: boolean;
    negative?: boolean;
    empty?: boolean;
}

interface CustomAmountFieldState {
    labelPosition: Animated.Value;
    labelColor: string;
    fieldBorderColor: string;
    formatedValue: string;
    rawValue: string;
}

export default class CustomAmountField extends Component<CustomAmountFieldProps, CustomAmountFieldState> {
    textInputRef1: any
    textInputRef2: any

    constructor(props: CustomAmountFieldProps) {
        super(props);
        let numberValue = this.props.value ? Number.parseFloat(this.props.value) : 0

        this.state = {
            labelPosition: this.props.value && this.props.value.length > 0 ? new Animated.Value(sharedStyle.labelVisible.top) : new Animated.Value(sharedStyle.labelHidden.top),
            labelColor: sharedStyle.label.color,
            fieldBorderColor: sharedStyle.fieldInactive.borderColor,
            formatedValue: this.props.empty ? '' : this.formatValue(numberValue),
            rawValue: ''
        }
    }

    formatValue(number: number) {
        return new Intl.NumberFormat(
            'it-IT', {
            minimumIntegerDigits: 1,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(number);
    }

    render() {
        return (
            <View style={sharedStyle.container}>
                <View style={[sharedStyle.wrapper, { borderColor: this.state.fieldBorderColor }]}>
                    <Animated.Text style={[sharedStyle.label, { top: new Animated.Value(sharedStyle.labelVisible.top), color: this.state.labelColor }]}>{this.props.label}</Animated.Text>
                    <View style={style.wrapper}>
                        <TextInput style={[style.currency, Platform.OS == 'android' && sharedStyle.textInputMargin]}
                            value={this.props.currency || '$'}
                            editable={false}
                        />

                        {(!this.props.empty || (this.props.value != undefined && this.props.value.length > 0)) && this.props.negative && (
                            <TextInput style={[style.signum, Platform.OS == 'android' && sharedStyle.textInputMargin]} value={this.props.negative ? '-' : ''} editable={false} />
                        )}

                        <TextInput ref={(ref) => { this.textInputRef2 = ref }}
                            style={[sharedStyle.textInput, Platform.OS == 'android' && style.textInputMargin]}
                            caretHidden={true}
                            placeholder={this.props.placeholder}
                            value={this.state.formatedValue}
                            editable={false}
                            selection={{ start: this.state.formatedValue ? this.state.formatedValue.length : 0, end: this.state.formatedValue ? this.state.formatedValue.length : 0 }}
                        />

                    </View>
                    <TextInput ref={(ref) => { this.textInputRef1 = ref }}
                        style={[style.textInput, Platform.OS == 'android' && sharedStyle.textInputMargin,]}
                        onFocus={() => { FormAnimationManager.activateField(this, this.props.value || '') }}
                        onBlur={() => { FormAnimationManager.deactivateField(this, this.props.value || ''); }}
                        onChangeText={(value: string) => {
                            value = value.replace(',', '');
                            value = value.replace('.', '');
                            let number = 0.00

                            if (this.props.empty && value == "00") {
                                this.props.onChangeText('');
                                this.setState({ formatedValue: '' })
                            } else {
                                if (value != "") {
                                    number = Number.parseInt(value)
                                    number = number / 100
                                    this.setState({ formatedValue: this.formatValue(number), rawValue: value })
                                } else {
                                    this.setState({ formatedValue: this.formatValue(0.00), rawValue: value })
                                }
                                this.props.onChangeText(number.toFixed(2))
                            }
                        }}
                        value={this.props.value}
                        keyboardType={'number-pad'}
                        editable={!this.props.disabled}
                        maxLength={13}
                        autoFocus={this.props.autofocus}
                        contextMenuHidden
                    />
                </View>
            </View>
        );
    }
}
