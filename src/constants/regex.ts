export const passwordRegex = new RegExp(
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
);

export const phoneRegex = new RegExp(/^(\+234|0)?[789][01]\d{8}$/);
