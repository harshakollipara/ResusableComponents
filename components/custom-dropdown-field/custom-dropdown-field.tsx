import { View, TextInput, Animated, Platform, Picker, ActionSheetIOS, TouchableHighlight, TouchableWithoutFeedback, Alert, Text } from 'react-native';
import React, { Component } from 'react';
import { AnimatedValue } from 'react-navigation';
import { sharedStyle } from '../common/shared-style';
import { style } from './style';
import { baseTheme } from '../../styles/baseTheme';
import FormAnimationManager from '../common/form-animation-manager';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomDropdownFieldProps {
    label: string;
    placeholder?: string;
    onChangeValue: (Object: { index: number, value: string }) => void;
    model: string[];
    selected?: string;
    showPlaceholder?: boolean;
    showLabel?: boolean;
}

interface CustomDropdownFieldState {
    labelOpacity: Animated.Value;
    labelPosition: Animated.Value;
    labelColor: string;
    fieldBorderColor: string;
    value: string;
    index: number;
}

export default class CustomDropdownField extends Component<CustomDropdownFieldProps, CustomDropdownFieldState> {

    constructor(props: CustomDropdownFieldProps) {
        super(props);
        this.state = {
            labelOpacity: this.props.showLabel ? new Animated.Value(1) : this.props.selected && this.props.selected.length > 0 ? new Animated.Value(1) : new Animated.Value(0),
            labelColor: sharedStyle.label.color,
            labelPosition: this.props.showLabel ? new Animated.Value(sharedStyle.labelVisible.top) : this.props.selected && this.props.selected.length > 0 ? new Animated.Value(sharedStyle.labelVisible.top) : new Animated.Value(sharedStyle.labelHidden.top),
            fieldBorderColor: sharedStyle.fieldInactive.borderColor,
            value: this.props.selected ? this.props.selected : '',
            index: this.props.showPlaceholder ? -1 : 0
        }
    }

    componentDidUpdate(prevProps: CustomDropdownFieldProps) {
        if (prevProps != null && this.props != null && this.props.selected != null && prevProps.selected != this.props.selected) {
            let newIndex = 0;
            newIndex = this.props.model.indexOf(this.props.selected) ? this.props.model.indexOf(this.props.selected) : 0;
            this.setState({ ...this.state, value: this.props.selected, index: newIndex });
        }
    }

    private updateParentState = (value: string, index: number) => {
        if (Platform.OS == 'android') {
            if (index >= 0) {
                this.props.onChangeValue({ value: value, index: this.props.showPlaceholder ? index - 1 : index });
            }
        } else {
            this.props.onChangeValue({ value: value, index: index });
        }
        this.setState({
            value: value,
            index: index
        })
    };

    componentDidMount() {
        if (this.props.model.length > 0 && !(this.props.selected && this.props.selected.length > 0)) {
            this.props.onChangeValue({ value: this.props.model[0], index: 0 });
        }
    }

    render() {
        if (Platform.OS == 'android') {
            return (
                <View style={sharedStyle.container}>
                    <View style={[sharedStyle.wrapper, { borderColor: this.state.fieldBorderColor }]}>
                        <Animated.Text style={[sharedStyle.label, { opacity: this.state.labelOpacity, top: this.state.labelPosition }]}>{this.props.label}</Animated.Text>

                        {this.props.model && this.props.model.length == 0 && (
                            <Picker style={style.textInputAndroid} selectedValue={this.state.value} onValueChange={(value, index) => { this.updateParentState(value, index); FormAnimationManager.handlePickerTransition(this.state.labelOpacity, this.state.labelPosition) }} >
                                <Picker.Item label={this.props.placeholder ? this.props.placeholder : ''} value={''} color={baseTheme.colors.primary.chinese_white} />
                            </Picker>
                        )}

                        {this.props.model && this.props.model.length > 0 && this.props.showPlaceholder && (
                            <Picker style={style.textInputAndroid} selectedValue={this.state.value} onValueChange={(value, index) => { this.updateParentState(value, index); FormAnimationManager.handlePickerTransition(this.state.labelOpacity, this.state.labelPosition) }} >
                                <Picker.Item label={this.props.placeholder ? this.props.placeholder : ''} value={''} color={baseTheme.colors.primary.chinese_white} key={-1} />
                                {this.props.model.map((item: string, index: string | number | undefined) => {
                                    return (<Picker.Item label={item} value={item} key={index} color={'black'} />)
                                })}
                            </Picker>
                        )}

                        {this.props.model && this.props.model.length > 0 && !this.props.showPlaceholder && (
                            <Picker style={style.textInputAndroid} selectedValue={this.state.value} onValueChange={(value, index) => { this.updateParentState(value, index); FormAnimationManager.handlePickerTransition(this.state.labelOpacity, this.state.labelPosition) }} >
                                {this.props.model.map((item: string, index: string | number | undefined) => {
                                    return (<Picker.Item label={item} value={item} key={index} color={'black'} />)
                                })}
                            </Picker>
                        )}

                    </View>
                </View>
            );
        } else if (Platform.OS == 'ios') {

            return (
                <View style={sharedStyle.container}>
                    <View style={[sharedStyle.wrapper, { borderColor: this.state.fieldBorderColor }]}>
                        <Animated.Text style={[sharedStyle.label, { opacity: this.state.labelOpacity, top: this.state.labelPosition, color: this.state.labelColor }]}>{this.props.label}</Animated.Text>
                        {!((this.props.selected && this.props.selected.length > 0) || this.state.index >= 0) && this.props.showPlaceholder && (
                            <Text style={sharedStyle.placeholder}>
                                {this.props.placeholder}
                            </Text>
                        )}
                        {((this.props.selected && this.props.selected.length > 0) || this.state.index >= 0) && (
                            <Text style={style.textInputIOS}>
                                {this.state.value || this.props.selected}
                            </Text>
                        )}
                        <MaterialIcons name={'keyboard-arrow-down'} size={baseTheme.materialIcons.sizes.primary} color={baseTheme.colors.primary.cyan} style={style.arrowIOS} />
                        <View style={style.dropdownIOS}>
                            <RNPickerSelect
                                placeholder={this.props.showPlaceholder ? { label: this.props.placeholder, value: this.props.placeholder } : {}}
                                onValueChange={(value, index) => { this.setState({ index: index - 1 }) }}
                                onDonePress={() => { this.state.index >= 0 && this.updateParentState(this.props.model[this.state.index], this.state.index); FormAnimationManager.handlePickerTransition(this.state.labelOpacity, this.state.labelPosition) }}
                                items={this.props.model.map((value, index) => {
                                    return {
                                        label: value, value: value, key: value
                                    }
                                })}
                                onOpen={() => { FormAnimationManager.activateField(this, ' ') }}
                                onClose={() => { FormAnimationManager.deactivateField(this, ' ') }}
                                textInputProps={{ width: 500, height: baseTheme.dimensions.heights.formFields, color: 'transparent' }}
                                itemKey={this.props.selected ? this.props.selected : (this.props.model ? this.props.model[0] : '')}
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }
}


