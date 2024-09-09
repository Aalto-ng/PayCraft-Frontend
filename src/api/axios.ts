import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:6020/api/v1",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

export default apiClient;
