import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, deleteEmployee } from '../actions';
import { Actions } from 'react-native-router-flux'; 
import Communications from 'react-native-communications';
import Confirm from './Confirm'

class EmployeeEdit extends Component {
	constructor(props){
		super(props);
			
			this.state = {
				showModal: false
			
		}
	}

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

  		  this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });

	}

	onTextButtonPressed(){
		const {  phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}


	onDecline(){
		this.setState({ showModal: false});
	}

	onAccept(){
		const { uid } = this.props.employee;

		this.props.deleteEmployee({uid})
	}

	render(){
		return(
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPressed.bind(this)}>Save Changes</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextButtonPressed.bind(this)}>Send Schedule</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm 
					onDecline={this.onDecline.bind(this)}
					onAccept={this.onAccept.bind(this)}
					visible={this.state.showModal}>
					Are you sure you want to fire this employee?
				</Confirm>
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave, deleteEmployee })(EmployeeEdit);