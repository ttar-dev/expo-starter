import React, { Component } from 'react';
import { Platform, StatusBar, View, Dimensions } from 'react-native';
import { Provider, connect } from 'react-redux';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import AppStore from './store';
import AppNavigator from './navigation/AppNavigator';
import Styles from './constants/Styles';

const screen = Dimensions.get('window');

class RootContainer extends Component {
	render() {
		return (
			<View style={[Styles.rootContainer, { ...screen }]}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<AppNavigator />
			</View>
		);
	}
}
const mapStateToProps = state => ({
	state
});

const ConnectedRootContainer = connect(
	mapStateToProps,
	null
)(RootContainer);

class App extends Component {
	state = {
		isLoadingComplete: false
	};

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return <AppLoading startAsync={this.loadResourcesAsync} onFinish={this.handleFinishLoading} />;
		} else {
			return (
				<Provider store={AppStore}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<ConnectedRootContainer />
				</Provider>
			);
		}
	}

	loadResourcesAsync = async () => {
		await Promise.all([
			Asset.loadAsync([
				// Data Asset
			]),
			Font.loadAsync({
				//Fonts Asset
			})
		]);
	};

	handleLoadingError = error => {
		// In this case, you might want to report the error to your error reporting
		// service, for example Sentry
		console.warn(error);
	};

	handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

export default App;
