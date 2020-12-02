import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../containers/HomePage/HomePage'

const RootStack = createStackNavigator(
    {
        HomePage
    }, {
    initialRouteName: 'HomePage',
    defaultNavigationOptions: {

    },
},
);

export default RootStack;
