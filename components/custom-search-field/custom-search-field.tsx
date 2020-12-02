import React from "react";
import { View, TextInput } from "react-native";
import { style } from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


interface CustomSearchFieldProps {
    placeholder: string;
    onChangeText: (value: string) => void
}

interface CustomSearchFieldState {
    value: string
}

class CustomSearchField extends React.Component<CustomSearchFieldProps, CustomSearchFieldState> {
    constructor(props: CustomSearchFieldProps) {
        super(props);
        this.state = {
            value: ''
        }
    }

    private updateParentState = (value: string) => {
        this.props.onChangeText(value);
        this.setState({ value: value });
    }

    render() {

        return (
            <View style={style.container}>
                <View style={style.textInputContainer}>
                    <TextInput style={style.textInput} placeholder={this.props.placeholder} onChangeText={(value) => { this.updateParentState(value) }} />
                </View>
                <View style={style.iconContainer}>
                    <MaterialIcons name={'search'} style={style.icon} />
                </View>
            </View>
        );
    }
}

export default CustomSearchField;


