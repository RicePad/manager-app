import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';


class EmployeeCreate extends Component{
	

	render(){
		console.log('this.props', this.props)
		return(
			<Card>
				<CardSection>
					<Input
						label="Name"
						plaeholder="Ricepad"
						value={this.props.name}
						onChangeText={(text) => this.props.employeeUpdate({ prop: 'name', value: text })}
					/>
				</CardSection>
					<Input
						label="Phone"
						plaeholder="401-3390-440"
						value={this.props.phone}
						onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text})}
						/>
				<CardSection>
					<Input
						label="Shift"
						placeholder="Monday 1-8"
						value={this.props.shift}
						onChangeText={(text) => this.props.employeeUpdate({prop: 'shift', value: text})}
						/>
				</CardSection>

				<CardSection>
					<Button>Create</Button>
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

export default connect( mapStateToProps, { employeeUpdate } )(EmployeeCreate);