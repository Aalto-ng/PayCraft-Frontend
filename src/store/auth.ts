import { create } from "zustand";

// Setup retrieving a new accessToken when it expires using the refresh Token

interface AuthStoreProps {
	accessToken: string | null;
	// refreshToken: string | null;
	actions: {
		setAccessToken: (token: string) => void;
	};
}

const useAuthStore = create<AuthStoreProps>((set) => ({
	accessToken: null,
	actions: {
		setAccessToken: (token) => set({ accessToken: token }),
	},
}));

export const useAuth = () => useAuthStore((s) => s.accessToken);

export const useAuthActions = () => useAuthStore((s) => s.actions);
