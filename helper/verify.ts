export function verifyEmail(email: string, required = false) {
	if (!email) return !required;
	return email
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}

export function verifyID(id: string, required = false) {
	if (!id) return !required;
	return id.match(/^\d{4}-\d{5,6}$/);
}

export function verifyPassword(password: string, required = false) {
	if (!password) return !required;
	return password.length >= 8;
}
