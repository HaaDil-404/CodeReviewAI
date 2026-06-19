"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
    loginSchema,
    LoginFormData,
} from "@/schemas/auth.schema";

import { loginUser } from "@/services/auth.service";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

export default function LoginForm() {

    const router = useRouter();

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: LoginFormData) {

        try {

            await loginUser(
                data.email,
                data.password
            );

            toast.success(
                "Logged in successfully"
            );

            router.push("/dashboard");
            router.refresh();

        } catch {

            toast.error(
                "Invalid credentials"
            );

        }
    }

    return (

        <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-2xl">

            <h1 className="mb-8 text-3xl font-bold">
                Login
            </h1>

            <Form {...form}>

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (

                            <FormItem>

                                <FormLabel>Email</FormLabel>

                                <FormControl>

                                    <Input
                                        placeholder="Enter email"
                                        {...field}
                                    />

                                </FormControl>

                                <FormMessage />

                            </FormItem>

                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (

                            <FormItem>

                                <FormLabel>Password</FormLabel>

                                <FormControl>

                                    <Input
                                        type="password"
                                        placeholder="Enter password"
                                        {...field}
                                    />

                                </FormControl>

                                <FormMessage />

                            </FormItem>

                        )}
                    />

                    <Button
                        className="w-full"
                        type="submit"
                    >
                        Login
                    </Button>

                </form>

            </Form>

        </div>

    );
}