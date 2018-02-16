import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';


class EmployeeForm extends Component {
	render(){

		return(
			<View>
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
						onValueChange={(value) => this.props.employeeUpdate({props: 'shift', value})}
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

			
			</View>
			)
	}
} 

function mapStateToProps(state){
	const { name, phone, shift } = state.employeeForm
	return{
		name,
		phone,
		shift
	}
}




const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(mapStateToProps, { employeeUpdate } )(EmployeeForm);