import { NavigationActions } from 'react-navigation';
import { any } from 'prop-types';
import { StackActions } from 'react-navigation';
import { Alert } from 'react-native';

const NavigationManager = {

    navigator: any,

    setTopLevelNavigator(navigatorRef: any) {
        this.navigator = navigatorRef;
    },

    navigate(routeName: any, params?: any) {
        var nav: any = this.navigator;
        nav.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            }),
        );
    },

    navigateAndClear(routeName: any, params?: any) {
        var nav: any = this.navigator;
        nav.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params,
                }),
            ],
        })
        )
    },

    goBack() {
        var nav: any = this.navigator;
        nav.dispatch(
            NavigationActions.back()
        )
    },

};

export default NavigationManager;