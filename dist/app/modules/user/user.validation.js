"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string({ required_error: "First Name is requir" }),
            lastName: zod_1.z.string({ required_error: "Last Name is requir" }),
        }),
        role: zod_1.z.string({ required_error: "Role is requier" }),
        password: zod_1.z.string({ required_error: "Password is requir" }),
        phoneNumber: zod_1.z.string({ required_error: "Password is require" }),
        address: zod_1.z.string({ required_error: "Address is require" }),
        budget: zod_1.z.number({ required_error: "Budget is require" }),
        income: zod_1.z.number({ required_error: "Income is require" }),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
};
