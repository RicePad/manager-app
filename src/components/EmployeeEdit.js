import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
	

	componentWillMount() {
		//Employee model component model come 
		//into this component and iterate through every property
		// of the object and updating the reducer.
		//Note: it's prefilling values inside the reducer

	    _.each(this.props.employee, (value, prop) => {
	      this.props.employeeUpdate({ prop, value });
    });
  }

	onButtonPressed(){
   	    const { name, phone, shift } = this.props;
		console.log(name, phone, shift)
	}

	render(){
		return(
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPressed.bind(this)}>Save Changes</Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);