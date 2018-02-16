import React, { Component } from 'react';
import { View } from 'react-native';
import connect from 'react-redux';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';
import EmployeeForm from 'EmployeeForm';


class EmployeeEdit(){
	render(){
		return(
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button>Save Changes</Button>
				</CardSection>
			</Card>
			)
	}
}

export default connect(null)(EmployeeEdit);