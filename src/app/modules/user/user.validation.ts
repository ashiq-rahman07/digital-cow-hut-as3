import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({ required_error: "First Name is requir" }),
      lastName: z.string({ required_error: "Last Name is requir" }),
    }),
    role: z.string({ required_error: "Role is requier" }),
    password: z.string({ required_error: "Password is requir" }),
    phoneNumber: z.string({ required_error: "Password is require" }),
    address: z.string({ required_error: "Address is require" }),
    budget: z.number({ required_error: "Budget is require" }),
    income: z.number({ required_error: "Income is require" }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
