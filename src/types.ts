export interface Response<T> {
	statusCode: string;
	statusMessage: string;
	data: T;
}

export interface LoginResponse {
	accessToken: string;
	refreshToken: string;
	issuedAt: Date;
	expirationTime: string;
}
export interface SignUpResponse {
	statusCode: string;
	statusMessage: string;
	data: {
		firstName: string;
		lastName: string;
		emailAddress: string;
		phoneNumber: string;
		jobTitle: string;
	};
}
