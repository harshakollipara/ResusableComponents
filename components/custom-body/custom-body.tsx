import React, { Component } from 'react';
import { View } from 'react-native';
import { style } from './style';

interface CustomBodyProps {
}

interface CustomBodyState {
}

export default class CustomBody extends Component<CustomBodyProps, CustomBodyState> {
    constructor(props: CustomBodyProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={style.body}>
                {this.props.children}
            </View>
        );
    }
}
