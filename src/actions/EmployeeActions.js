export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';


export function employeeUpdate({prop , value}){
	const action = {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }

	}

	return action;
}

