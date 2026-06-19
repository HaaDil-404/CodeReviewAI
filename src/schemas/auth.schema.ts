import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters"),

  email: z
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters"),
});

export const loginSchema = z.object({
  email: z
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(6, "Password must contain at least 6 characters"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;