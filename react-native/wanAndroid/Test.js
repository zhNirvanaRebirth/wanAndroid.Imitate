import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView, FlatList, SectionList } from "react-native";

class TestProps extends Component {
	render() {
		return (
			<Text>{ this.props.text }</Text>
			);
	}
}

export default class Test extends Component {
	constructor(props){
		super(props);
		this.state = {text:"", tet:""};
	}

	render(){
		return(
				<View style={styles.content}>
					<Text>This is a test message!</Text>
					<TestProps text="zhwilson"/>
					<TextInput 
						placeholder="input something"
						onChangeText={(tet) => this.setState({tet})}/>
					<Text>{this.state.tet.split(' ').map((word) => word && "🍕").join(" ")}</Text>
					<SectionList 
						sections={[
							{title:"A", data:[{key:"AA"}, {key:"BB"}]},
							{title:"B", data:[{key:"AA"}, {key:"BB"}, {key:"AA"}, {key:"BB"}, {key:"AA"}, {key:"BB"}, {key:"AA"}, {key:"BB"}]},
							]}
							renderItem={({item}) => <Text>{item.key}</Text>}
							renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
							/>
							
					<FlatList 
						data={[
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
								{key:"A"},
								{key:"B"},
							]} 
							renderItem={({item}) => <Text>{item.key}</Text>}
							/>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	content: {
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"red",
	},
	sectionHeader:{
		fontSize:15,
		fontWeight:"bold",
		color:"yellow",
	}
});