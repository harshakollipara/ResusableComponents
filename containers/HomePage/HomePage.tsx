import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/custom-button/custom-button';
import CustomSubmitButton from '../../components/custom-submit-button/custom-submit-button';
import MainContainer from '../../components/main-container/main-container';
import CustomBody from '../../components/custom-body/custom-body';
import CustomTextField from '../../components/custom-text-field/custom-text-field';
import CustomWrapper from '../../components/custom-wrapper/custom-wrapper';
import CustomRadioButton from '../../components/custom-radio-button/custom-radio-button';
import { DayDataTypeEnum } from '../../model/Data/day-data-type-enum';
import CustomScrollView from '../../components/custom-scroll-view/custom-scroll-view';
import CustomDateField from '../../components/custom-date-field/custom-date-field';
import BaseLocalization from '../../modules/localization-manager/content/base-localization';
import { DateUtility } from '../../model/DateUtilities/date-utility';
import { style } from './style';
import CustomDropdownField from '../../components/custom-dropdown-field/custom-dropdown-field';
import CustomLoginPin from '../../components/custom-login-pin/custom-login-pin';
import CustomToggleButton from '../../components/custom-toggle-button/custom-toggle-button';
import CustomCheckBox from '../../components/custom-check-box/custom-check-box';
import CustomAmountField from '../../components/custom-amount-field/custom-amount-field';
import CustomSearchField from '../../components/custom-search-field/custom-search-field';

interface HomePageProps {

}

interface HomePageState {
    dayData: DayDataTypeEnum,
    dateFrom: string,
    dateTo: string,
    data: string[],
    checkBox: boolean
}

class HomePage extends Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);

        this.state = {
            dayData: DayDataTypeEnum.Day,
            dateFrom: '',
            dateTo: '',
            data: ['one', 'two', 'three'],
            checkBox: true
        };
    }


    dayData = [
        {
            label: 'Day',
            text: 'Monday',
        },
        {
            label: 'Day',
            text: 'Tuesday',
        },
        {
            label: 'Day',
            text: 'Wendesday',
        },
        {
            label: 'Day',
            text: 'Thursday',
        },
        {
            label: 'Day',
            text: 'Friday',
        },
        {
            label: 'Day',
            text: 'Saturday',
        },
        {
            label: 'Day',
            text: 'Sunday',
        }
    ];

    render() {

        return (
            <MainContainer>
                {/*<CustomScrollView>
                    <CustomBody>
                        <CustomWrapper paddingHorizontal paddingVertical>
                            <CustomSearchField placeholder={BaseLocalization.searchField} onChangeText={() => { }} />
                        </CustomWrapper>
                        <CustomWrapper paddingHorizontal paddingVertical>
                            <CustomTextField label='First Name' placeholder='Please Enter First Name' onChangeText={() => { }} />
                        </CustomWrapper>
                        <CustomWrapper paddingHorizontal paddingVertical>
                            <CustomTextField label='Last Name' placeholder='Please Enter Last Name' onChangeText={() => { }} />
                        </CustomWrapper>
                        <CustomWrapper paddingVertical paddingHorizontal>
                            <CustomRadioButton
                                onChangeValue={value => {
                                    this.setState({
                                        dayData: value,
                                    });
                                }}
                                model={this.dayData}
                                selectedItem={this.state.dayData} />
                        </CustomWrapper>
                        <CustomWrapper paddingVertical paddingHorizontal>
                            <CustomButton text='Press Me.!' onPress={() => { }} />
                        </CustomWrapper>
                        <CustomWrapper paddingVertical paddingHorizontal>
                            <CustomToggleButton label={BaseLocalization.select}
                                onChangeValue={() => { }}
                            />
                        </CustomWrapper>
                        <CustomWrapper paddingHorizontal paddingVertical>
                            <CustomCheckBox text={BaseLocalization.check}
                                onChangeValue={() => { }}
                                isSelected={this.state.checkBox} />
                        </CustomWrapper>
                        <CustomWrapper paddingVertical>
                            <View style={style.twoFieldsRow}>
                                <View style={style.formSpacer}>
                                    <CustomWrapper paddingHorizontal>
                                        <CustomDateField
                                            label={BaseLocalization.STARTDATE}
                                            placeholder={BaseLocalization.STARTDATE}
                                            value={this.state.dateFrom ? this.state.dateFrom : DateUtility.formatDate(new Date(), 'dd/MM/yyyy')}
                                            maxDate={DateUtility.formatDate(new Date(), 'dd/MM/yyyy')}
                                            onChangeText={value => {
                                                this.setState({
                                                    dateFrom: value,
                                                });
                                            }} />
                                    </CustomWrapper>
                                </View>
                                <View style={style.formSpacer}>
                                    <CustomWrapper paddingHorizontal>
                                        <CustomDateField
                                            label={BaseLocalization.ENDDATE}
                                            placeholder={BaseLocalization.ENDDATE}
                                            value={this.state.dateTo ? this.state.dateTo : DateUtility.formatDate(new Date(), 'dd/MM/yyyy')}
                                            minDate={this.state.dateFrom}
                                            maxDate={DateUtility.formatDate(new Date(), 'dd/MM/yyyy')}
                                            onChangeText={value => {
                                                this.setState({
                                                    dateTo: value,
                                                });
                                            }}
                                        />
                                    </CustomWrapper>
                                </View>
                            </View>
                        </CustomWrapper>
                        <CustomWrapper paddingHorizontal paddingVertical>
                            <CustomDropdownField
                                label={BaseLocalization.searchFormType}
                                placeholder={BaseLocalization.searchFormType}
                                model={this.state.data}
                                onChangeValue={(value) => {
                                    this.setState({})
                                }}
                                showPlaceholder />
                        </CustomWrapper>
                        <CustomWrapper paddingVertical paddingHorizontal>
                            <CustomAmountField
                                label={BaseLocalization.amount}
                                placeholder={BaseLocalization.selectAmount}
                                onChangeText={() => { }} />
                        </CustomWrapper>
                        <CustomWrapper paddingHorizontal paddingVertical>
                            <CustomLoginPin onChangeText={value => {
                            }} />
                        </CustomWrapper>
                    </CustomBody>
                    <CustomSubmitButton text='Press Me.!' onPress={() => { }} />
                </CustomScrollView>*/}
                <CustomWrapper paddingVertical paddingHorizontal>
                    <CustomAmountField
                        label={BaseLocalization.amount}
                        placeholder={BaseLocalization.selectAmount}
                        onChangeText={() => { }}
                        currency={'INR'}
                        value={'1222'}
                        negative
                        empty />
                </CustomWrapper>
            </MainContainer>

        );
    }
}

export default HomePage;
