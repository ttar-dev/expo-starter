import { createStackNavigator } from 'react-navigation-stack';

import WalkthroughScreen from '../screens/Walkthrough/Welcome';

export const WalkthroughStack = createStackNavigator(
	{
		Walkthrough: {
			screen: WalkthroughScreen,
			navigationOptions: () => ({
				header: null
			})
		}
	},
	{
		initialRouteName: 'Walkthrough'
	}
);
