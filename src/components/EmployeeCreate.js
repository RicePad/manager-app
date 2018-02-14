import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';


class EmployeeCreate extends Component{
	render(){
		return(
			<Card>
				<CardSection>
					<Input
						label="Name"
						plaeholder="Ricepad"
					/>
				</CardSection>
					<Input
						label="Phone"
						plaeholder="401-3390-440"
						/>
				<CardSection>
					<Text>Date Picker</Text>
				</CardSection>

				<CardSection>
					<Button>Create</Button>
				</CardSection>
			</Card>
			)
	}
}

export default EmployeeCreate;