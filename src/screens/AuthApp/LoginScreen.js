import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import Styles from '../../constants/Styles'; // default style css

class LoginScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { navigation } = this.props;
		const { navigate, goBack } = navigation;
		return (
			<View style={[Styles.container, { backgroundColor: 'blue' }]}>
				<Text>Login</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	// Customize CSS
});

const mapStateToProps = state => ({
	state
});

export default connect(mapStateToProps)(LoginScreen);
