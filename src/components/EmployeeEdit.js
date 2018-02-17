import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Actions } from 'react-native-router-flux'; 
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
	

	componentWillMount() {
		//Employee model component model comes 
		//into this component and iterate through every property
		// of the object and updates the reducer with new information.
		
		//Note: it's prefilling values inside the reducer to show exiting
		//info

	    _.each(this.props.employee, (value, prop) => {
	      this.props.employeeUpdate({ prop, value });
    });
  }

	onButtonPressed(){
		//When button is pressed reducer is updated
		//with new values
   	    
   	    const { name, phone, shift } = this.props;

   	    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })

	}

	onTextButtonPresse(){
		const {  phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	render(){
		return(
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPressed.bind(this)}>Save Changes</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextButtonPresse.bind(this)}>Send Schedule</Button>
				</CardSection>
			</Card>
			)
	}
}

function mapStateToProps(state){
	const { name, phone, shift } = state.employeeForm

	return {
		name,
		phone,
		shift
	}
}	

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);