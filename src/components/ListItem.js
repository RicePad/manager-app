import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardSection from './CardSection';

class ListItem extends Component {
	
	renderRowPressed(){
			Actions.employeeCreate()
		}
	

	render(){
		return(
			
			<TouchableWithoutFeedback onPress={this.renderRowPressed.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{this.props.employee.name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
			)
	}
}


const styles = {
  titleStyle: {
    fontSize: 30,
    paddingLeft: 15
  }
};

export default ListItem;
