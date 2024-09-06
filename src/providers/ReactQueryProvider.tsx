"use client";
import {
	MutationCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

declare module "@tanstack/react-query" {
	interface Register {
		defaultError: AxiosError;
	}
}

export default function ReactQueryClientProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					staleTime: 10 * 1000,
				},
			},
			mutationCache: new MutationCache({
				onError: (error) => {
					if (!error.response) {
						toast.error("Network Error");
					} else if (error.response.status === 400) {
						toast.error("Invalid Credentials");
					} else if (error.response.status === 401) {
						toast.error("Unauthorized");
					}
				},
			}),
		})
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
