import { z } from "zod";

export const LoginUpSchema = z.object({
  email: z.string({ message: "Email Invalido" }).email("Email Invalido"),
  pass: z.string().min(6, "Senha deve conter mais de 6 caracteres"),
});
