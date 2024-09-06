import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

import axios from "@/api/axios";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import useAuth from "@/hooks/useAuth";
const LOGIN_URL = "/auth/login";

function Login() {
  const { setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ emailAddress: email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      // setAuth({ user, accessToken });
      // setEmail("");
      // setPassword("");
      navigate(from, { replace: true });
    } catch (error: AxiosError | any) {
      if (!error.response) {
        return toast({
          variant: "destructive",
          title: "Error",
          description: "Network Error",
        });
      } else if (error.response.status === 400) {
        return toast({
          variant: "destructive",
          title: "Error",
          description: "Invalid Credentials",
        });
      } else if (error.response.status === 401) {
        return toast({
          variant: "destructive",
          title: "Error",
          description: "Unauthorized",
        });
      }
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <LoginForm
          setPassword={setPassword}
          setEmail={setEmail}
          email={email}
          password={password}
        />
      </form>
    </section>
  );
}

export default Login;

//for later
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const formSchema = z.object({
//   email: z.string().email({
//     message: "Please enter a valid email address",
//   }),
//   password: z
//     .string()
//     .min(8)
//     .refine(
//       (value) =>
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(
//           value
//         ),
//       {
//         message:
//           "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.",
//       }
//     ),
// });

// function Login() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   function onSubmit(data: z.infer<typeof formSchema>) {
//     console.log(data);
//   }

//   return (
//     <div>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-2/3 space-y-6"
//         >
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="shadcn" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     </div>
//   );
// }

// export default Login;
