"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowValidation = void 0;
const zod_1 = require("zod");
const createCowZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is requier" }),
        age: zod_1.z.number({ required_error: "Age is requier" }),
        price: zod_1.z.number({ required_error: "Price is requir" }),
        location: zod_1.z.string({ required_error: "location is require" }),
        breed: zod_1.z.string({ required_error: "breed is require" }),
        weight: zod_1.z.string({ required_error: "Weight is require" }),
        label: zod_1.z.string({ required_error: "label is require" }),
        category: zod_1.z.string({ required_error: "Categorie is require" }),
        seller: zod_1.z.string({ required_error: "Seller is require" }),
    }),
});
const updateCowZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }).optional(),
        age: zod_1.z.number({ required_error: "Age is required" }).optional(),
        price: zod_1.z.number({ required_error: "Price is required" }).optional(),
        location: zod_1.z.string({ required_error: "Location is required" }).optional(),
        breed: zod_1.z.string({ required_error: "Breed is required" }).optional(),
        weight: zod_1.z.string({ required_error: "Weight is required" }).optional(),
        label: zod_1.z.string({ required_error: "Label is required" }).optional(),
        category: zod_1.z.string({ required_error: "Category is required" }).optional(),
        seller: zod_1.z.string({ required_error: "Seller is required" }).optional(),
    }),
});
exports.CowValidation = {
    createCowZodSchema,
    updateCowZodSchema,
};
