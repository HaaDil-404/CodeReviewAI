"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  registerSchema,
  RegisterFormData,
} from "@/schemas/auth.schema";

import { registerUser } from "@/services/auth.service";

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

export default function RegisterForm() {

  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(
    data: RegisterFormData
  ) {

    try {

      await registerUser(
        data.name,
        data.email,
        data.password
      );

      toast.success(
        "Registration successful"
      );

      router.push("/login");

    } catch {

      toast.error(
        "Registration failed"
      );

    }
  }

  return (

    <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-2xl">

      <h1 className="mb-8 text-3xl font-bold">
        Register
      </h1>

      <Form {...form}>

        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (

              <FormItem>

                <FormLabel>Name</FormLabel>

                <FormControl>

                  <Input
                    placeholder="Enter name"
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>

            )}
          />

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
            Register
          </Button>

        </form>

      </Form>

    </div>

  );
}