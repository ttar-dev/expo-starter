import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, View, ActivityIndicator } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { WalkthroughStack } from './WalkthroughStack';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

import Styles from '../constants/Styles';

class AuthLoadingScreen extends Component {
	constructor() {
		super();
		this._userAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_userAsync = async () => {
		const User = await AsyncStorage.getItem('User');
		const SkipWalkthrough = await AsyncStorage.getItem('SkipWalkthrough');
		this.props.navigation.navigate(!SkipWalkthrough ? 'Walkthrough' : User ? 'Main' : 'Auth');
	};

	// Render any loading content that you like here
	render() {
		return (
			<View style={Styles.container}>
				<ActivityIndicator />
			</View>
		);
	}
}

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: connect(null)(AuthLoadingScreen),
			Walkthrough: WalkthroughStack,
			Main: AppStack,
			Auth: AuthStack
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
);
