import React, { Component } from 'react';
import { ScrollView, View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { style } from './style';
import { baseTheme } from '../../styles/baseTheme';

interface CustomScrollViewProps {
    onScroll?: ((data: NativeSyntheticEvent<NativeScrollEvent>) => void);
    onInfiniteScroll?: ((data: NativeSyntheticEvent<NativeScrollEvent>) => void);
    nestedScrollView?: boolean;
    stickyHeadersIndices?: number[]
    transparent?: boolean;
    scrollEnabled?: boolean;
}

interface CustomScrollViewState {
}

export default class CustomScrollView extends Component<CustomScrollViewProps, CustomScrollViewState> {

    constructor(props: CustomScrollViewProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView style={[style.scrollView, !this.props.transparent && { backgroundColor: baseTheme.colors.primary.white }]} showsVerticalScrollIndicator={false} onScroll={(data) => {
                this.props.onScroll && this.props.onScroll(data);
                this.props.onInfiniteScroll && this.props.onInfiniteScroll(data);
            }} scrollEventThrottle={1} stickyHeaderIndices={this.props.stickyHeadersIndices} nestedScrollEnabled={this.props.nestedScrollView}
                scrollEnabled={this.props.scrollEnabled != undefined ? this.props.scrollEnabled : true}
                keyboardShouldPersistTaps={'always'}
            >
                <View style={style.wrapper}>
                    {this.props.children}
                </View>
            </ScrollView>
        );
    }
}

