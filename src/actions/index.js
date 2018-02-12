export const EMAIL_CHANGED = "EMAIL_CHANGED";

export function emailChanged(text) {
	const action = {
		type: EMAIL_CHANGED,
		payload: text
	}

	return action;
}