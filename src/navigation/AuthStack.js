import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './../screens/AuthApp/LoginScreen';

export const AuthStack = createStackNavigator(
	{
		LoginPage: {
			screen: LoginScreen,
			navigationOptions: () => ({
				header: null
			})
		}
	},
	{
		initialRouteName: 'LoginPage'
	}
);
