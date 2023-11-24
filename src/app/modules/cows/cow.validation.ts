import { z } from "zod";

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is requier" }),
    age: z.number({ required_error: "Age is requier" }),
    price: z.number({ required_error: "Price is requir" }),
    location: z.string({ required_error: "location is require" }),
    breed: z.string({ required_error: "breed is require" }),
    weight: z.string({ required_error: "Weight is require" }),
    label: z.string({ required_error: "label is require" }),
    category: z.string({ required_error: "Categorie is require" }),
    seller: z.string({ required_error: "Seller is require" }),
  }),
});
const updateCowZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }).optional(),
    age: z.number({ required_error: "Age is required" }).optional(),
    price: z.number({ required_error: "Price is required" }).optional(),
    location: z.string({ required_error: "Location is required" }).optional(),
    breed: z.string({ required_error: "Breed is required" }).optional(),
    weight: z.string({ required_error: "Weight is required" }).optional(),
    label: z.string({ required_error: "Label is required" }).optional(),
    category: z.string({ required_error: "Category is required" }).optional(),
    seller: z.string({ required_error: "Seller is required" }).optional(),
  }),
});

export const CowValidation = {
  createCowZodSchema,
  updateCowZodSchema,
};
