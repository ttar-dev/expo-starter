import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './../screens/MainApp/HomeScreen';

export const AppStack = createStackNavigator(
	{
		AppHome: {
			screen: HomeScreen,
			navigationOptions: () => ({
				header: null
			})
		}
	},
	{
		initialRouteName: 'AppHome'
	}
);
