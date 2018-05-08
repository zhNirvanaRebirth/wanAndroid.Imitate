import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class TitleBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
				<View style={styles.container}>
					<View style={styles.content}></View>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:'row',
		height:80,
	},
	content:{
		flex:1,
		backgroundColor:"#212121",
	}
});