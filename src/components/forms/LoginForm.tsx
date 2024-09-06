import { useLoginUser } from "@/hooks/useLoginUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const passwordRegex = new RegExp(
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
);
const schema = z.object({
	emailAddress: z.string().email({ message: "Invalid Email" }),
	password: z
		.string()
		.min(8, { message: "Minimum of 8 characters" })
		.regex(passwordRegex, {
			message:
				"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.",
		}),
});

export type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty },
	} = useForm<LoginFormData>({
		mode: "onChange",
		resolver: zodResolver(schema),
		defaultValues: {
			emailAddress: "",
			password: "",
		},
	});

	const { mutate, isPending } = useLoginUser();

	const onSubmit = (data: LoginFormData) => {
		console.log(data);
		mutate(data);
	};

	return (
		<form
			className="grid gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
				<Label htmlFor="email">Email</Label>
				<Input
					{...register("emailAddress")}
					id="emailAddress"
					type="email"
					placeholder="m@example.com"
					className="my-1"
					required
				/>
				{errors.emailAddress ? (
					<p className="text-red-500 font-medium text-xs">
						{errors.emailAddress.message}
					</p>
				) : null}
			</div>
			<div>
				<Label htmlFor="password">Password</Label>
				<Input
					{...register("password")}
					id="password"
					type="password"
					className="my-1"
					required
				/>
				{errors.password ? (
					<p className="text-red-500 font-medium text-xs">
						{errors.password.message}
					</p>
				) : null}
			</div>
			<Button
				type="submit"
				disabled={isDirty && !isValid}
				className="w-full"
			>
				{isPending ? <LoaderCircle className="animate-spin" /> : "Sign in"}
			</Button>
		</form>
	);
};

export default LoginForm;
