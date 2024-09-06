export interface Response<T> {
	statusCode: string;
	statusMessage: string;
	data: T;
}

export interface LoginResponse {
	accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJPc2Nhc...";
	refreshToken: "eyJhbGciOiJIUzI1...";
	issuedAt: "2024-09-06 15:34";
	expirationTime: "24hrs";
}
