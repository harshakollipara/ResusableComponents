import React, { Component } from 'react';
import { Animated, Text, View, TouchableOpacity, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';
import FormAnimationManager from '../common/form-animation-manager';
import { sharedStyle } from '../common/shared-style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BaseLocalization from '../../modules/localization-manager/content/base-localization';

interface CustomDateFieldProps {
    label: string;
    placeholder: string;
    onChangeText: (value: string) => void;
    value?: string;
    disablePastDates?: boolean;
    minDate?: string;
    maxDate?: string;
    disabled?: boolean;
}

interface CustomDateFieldState {
    labelOpacity: Animated.Value;
    labelPosition: Animated.Value;
    labelColor: string;
    fieldBorderColor: string;
    value: string;
    date: string;
}

export default class CustomDateField extends Component<CustomDateFieldProps, CustomDateFieldState> {
    constructor(props: CustomDateFieldProps) {
        super(props);
        this.state = {
            labelOpacity: new Animated.Value(1),
            labelPosition: new Animated.Value(sharedStyle.labelVisible.top),
            labelColor: sharedStyle.label.color,
            fieldBorderColor: sharedStyle.fieldInactive.borderColor,
            value: this.props.placeholder,
            date: this.props.value || '',
        };
    }

    datePicker = React.createRef<DatePicker>();

    private updateParentState = (value: string) => {
        this.props.onChangeText(value);
        this.setState({ value: value });
    };
    render() {
        return (
            <View style={sharedStyle.container}>
                <View style={[sharedStyle.wrapper, { borderColor: this.state.fieldBorderColor }]}>
                    <Animated.Text
                        style={[
                            sharedStyle.label,
                            {
                                opacity: this.state.labelOpacity,
                                top: this.state.labelPosition,
                                color: this.state.labelColor,
                            },
                        ]}
                    >
                        {this.props.label}
                    </Animated.Text>
                    {this.props.value != undefined && this.props.value.length == 0 && (
                        <Text style={sharedStyle.placeholder}>{this.props.placeholder}</Text>
                    )}
                    {this.props.value != undefined && this.props.value.length > 0 && (
                        <Text style={sharedStyle.dateText}>{this.props.value}</Text>
                    )}
                    <DatePicker
                        style={[sharedStyle.textInput, Platform.OS == 'android' && sharedStyle.textInputMargin]}
                        date={this.props.value ? this.props.value : this.state.date}
                        minDate={
                            this.props.minDate
                                ? this.props.minDate
                                : this.props.disablePastDates
                                    ? new Date()
                                    : undefined
                        }
                        maxDate={this.props.maxDate ? this.props.maxDate : undefined}
                        mode="date"
                        format="DD/MM/YYYY"
                        locale='it'
                        confirmBtnText={BaseLocalization.CONFIRM}
                        cancelBtnText={BaseLocalization.DEFAULT}
                        disabled={this.props.disabled}
                        onDateChange={date => {
                            this.updateParentState(date);
                            FormAnimationManager.deactivateField(this, this.state.value);
                            FormAnimationManager.handleDatePickerTransition(
                                this.state.labelOpacity,
                                this.state.labelPosition,
                                this,
                            );
                        }}
                        customStyles={{
                            dateIcon: {
                                display: 'none',
                            },
                            dateInput: {
                                opacity: 0,
                                flex: 1,
                            },
                        }}
                        onOpenModal={() => { }}
                        onCloseModal={() => {
                            FormAnimationManager.deactivateField(this, this.state.value);
                        }}
                        ref={(ref) => this.datePicker = ref!}
                    />
                    <View style={sharedStyle.iconContainer}>
                        <TouchableOpacity onPress={() => { this.datePicker.onPressDate() }}>
                            <MaterialIcons name={'date-range'} style={sharedStyle.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
