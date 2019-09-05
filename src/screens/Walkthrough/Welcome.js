import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Styles from './../../constants/Styles'; // default style css

class WalkthroughScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { navigation } = this.props;
		const { navigate, goBack } = navigation;
		return (
			<View style={[Styles.container, { backgroundColor: 'red' }]}>
				<Text>Walkthrough</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	// Customize CSS
});

export default WalkthroughScreen;
