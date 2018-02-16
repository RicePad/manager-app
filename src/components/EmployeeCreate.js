import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component{
	
	onButtonPressed(){
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
	}
	render(){
		return(
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button
						onPress={this.onButtonPressed.bind(this)}
					>Create</Button>
				</CardSection>
			</Card>
			)
	}
}


function mapStateToProps(state){
	// const { name, phone, shift } = state.employeeForm
	return {
		name: state.employeeForm.name,
		phone: state.employeeForm.phone,
		shift: state.employeeForm.shift
	}
}



export default connect( mapStateToProps, { employeeUpdate, employeeCreate } )(EmployeeCreate);