import React, { Component } from 'react';
import { Text } from 'react-native';
import CardSection from './CardSection';

class ListItem extends Component {
	render(){
		return(
				<CardSection>
					<Text style={styles.titleStyle}>{this.props.employee.name}</Text>
				</CardSection>
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
