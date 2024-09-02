import { z } from "zod";

export const signUpSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8, "Password must be at least 8 characters"),
        password_confirm: z.string(),
    })
    .refine((data) => data.password === data.password_confirm, {
        message: "Passwords do not match",
        path: ["password_confirm"],
    });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
