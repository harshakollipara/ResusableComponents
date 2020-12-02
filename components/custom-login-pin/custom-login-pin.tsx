import React, { Component, Ref } from 'react';
import { View, TextInput, Animated } from 'react-native';
import { sharedStyle } from '../common/shared-style';
import { style } from './style';
import { AnimatedValue } from 'react-navigation';
import FormAnimationManager from '../common/form-animation-manager';
import { baseTheme } from '../../styles/baseTheme';

interface CustomLoginPinProps {
    onChangeText: (value: string) => void;
    handleRef?: (ref: TextInput) => void;
    autofocus?: boolean;
}

interface CustomLoginPinState {
    value: string;
    topPosition: number;
    focus: boolean;
}

export default class CustomLoginPin extends Component<CustomLoginPinProps, CustomLoginPinState> {

    constructor(props: CustomLoginPinProps) {
        super(props);
        this.state = {
            value: '',
            topPosition: 0,
            focus: false,
        }
    }

    private updateParentState = (value: string) => {
        this.props.onChangeText(value);
        this.setState({ value: value });
    };

    focus() {

    }

    render() {

        return (
            <View style={style.container}>
                <View style={style.wrapper}>
                    <View style={style.pinWrapper}>
                        <View style={[style.charContainer, (this.state.focus && this.state.value.length == 0) ? style.active : style.inactive]}>
                            <TextInput style={style.char} value={this.state.value.length > 0 ? '•' : ''} editable={false} />
                        </View>
                        <View style={[style.charContainer, (this.state.focus && this.state.value.length == 1) ? style.active : style.inactive]}>
                            <TextInput style={style.char} value={this.state.value.length > 1 ? '•' : ''} editable={false} />
                        </View>
                        <View style={[style.charContainer, (this.state.focus && this.state.value.length == 2) ? style.active : style.inactive]}>
                            <TextInput style={style.char} value={this.state.value.length > 2 ? '•' : ''} editable={false} />
                        </View>
                        <View style={[style.charContainer, (this.state.focus && this.state.value.length == 3) ? style.active : style.inactive]}>
                            <TextInput style={style.char} value={this.state.value.length > 3 ? '•' : ''} editable={false} />
                        </View>
                        <View style={[style.charContainer, (this.state.focus && this.state.value.length == 4) ? style.active : style.inactive]}>
                            <TextInput style={style.char} value={this.state.value.length > 4 ? '•' : ''} editable={false} />
                        </View>
                        <View style={[style.charContainer, (this.state.focus && this.state.value.length >= 5) ? style.active : style.inactive]}>
                            <TextInput style={style.char} value={this.state.value.length > 5 ? '•' : ''} editable={false} />
                        </View>
                    </View>
                    <TextInput
                        ref={ref => ref && this.props.handleRef && this.props.handleRef(ref)}
                        style={[style.input, { top: this.state.topPosition }]}
                        onFocus={() => { this.setState({ focus: !this.state.focus }) }}
                        onBlur={() => { this.setState({ topPosition: 0, focus: !this.state.focus }) }}
                        onChangeText={(value) => { this.updateParentState(value) }}
                        keyboardType={'number-pad'}
                        textContentType={'password'}
                        maxLength={6}
                        autoFocus={this.props.autofocus}
                    />
                </View>
            </View>
        );
    }
}


