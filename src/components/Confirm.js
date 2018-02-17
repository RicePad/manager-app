import React from 'react';
import { View, Text, Modal } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const Confirm = ({ children, visible, onAccept, onDecline }) => {
	return(
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View>
				<CardSection>
					<Text>{ children }</Text>
				</CardSection>

				<CardSection>
					<Button onPress={onAccept}> Yes </Button>
					<Button onPress={onDecline}> No </Button>
				</CardSection>


			</View>
		</Modal>
		)
}



export default Confirm; 