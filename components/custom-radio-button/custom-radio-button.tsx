import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { style } from './style';
import CustomRadioButtonItem from './custom-radio-button-item/custom-radio-button-item';

interface CustomRadioButtonProps {
    onChangeValue: (value: number) => void;
    model: { label: string, text: string, message?: string }[];
    selectedItem: number;
    disabled?: boolean;
}

interface CustomRadioButtonState {
    selected: boolean
}

export default class CustomRadioButton extends Component<CustomRadioButtonProps, CustomRadioButtonState> {

    constructor(props: CustomRadioButtonProps) {
        super(props);
        this.state = {
            selected: false
        }
    }

    private updateParentState = (value: number) => {
        if (!this.props.disabled) {
            this.props.onChangeValue(value);
            this.setState({ selected: !this.state.selected });
        }
    };

    renderRadioButtonItems = ({ item, index }: any) => {
        return (
            <CustomRadioButtonItem
                model={item}
                isFirstItem={index == 0}
                index={index}
                onPress={(value) => { this.updateParentState(value) }}
                isSelected={index == this.props.selectedItem}
            />
        );
    }

    render() {

        return (
            <FlatList
                style={style.container}
                data={this.props.model}
                scrollEnabled={false}
                renderItem={this.renderRadioButtonItems.bind(this)}
                extraData={this.state.selected}
                refreshing={this.state.selected}
            />
        );
    }
}


