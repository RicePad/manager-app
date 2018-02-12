import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';


class LoginForm extends Component {
	
	onEmailChange(text){
		this.props.emailChanged(text);
	}

	onPasswordChange(text){

	}


	render(){
		// console.log('this.props.email', this.props.email)
		return(
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="example@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
						<Input
							secureTextEntry
							label="Password"
							placeholder="password"
							onChangePassword={this.onPasswordChange.bind(this)}
						/>
				</CardSection>
				<CardSection>
						<Button>
							Login
						</Button>
				</CardSection>
			</Card>
			)
	}
}


function mapStateToProps(state){
	return{
		email: state.auth.email
	}
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);