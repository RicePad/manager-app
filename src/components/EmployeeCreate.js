import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';


class EmployeeCreate extends Component{
	
	onButtonPressed(){
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
	}
	render(){
		console.log('this.props', this.props.shift)
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
				<CardSection>
					<Input
						label="Phone"
						plaeholder="401-3390-440"
						value={this.props.phone}
						onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text})}
						/>
				</CardSection>
       			 <CardSection>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						style={{flex: 1}}
						label="Shift"
						selectedValue={this.props.shift}
						onValueChange={(date) => this.props.employeeUpdate({props: 'shift', value: date})}
					>
						  <Picker.Item label="Monday" value="Monday" />
						  <Picker.Item label="Tuesday" value="Tuesday" />
						  <Picker.Item label="Wednesday" value="Wednesday" />
						  <Picker.Item label="Thursday" value="Thursday" />
						  <Picker.Item label="Friday" value="Friday" />
						  <Picker.Item label="Saturday" value="Saturday" />
						  <Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>

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

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect( mapStateToProps, { employeeUpdate, employeeCreate } )(EmployeeCreate);