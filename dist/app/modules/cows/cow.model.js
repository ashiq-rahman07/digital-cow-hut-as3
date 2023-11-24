"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
const mongoose_1 = require("mongoose");
const cow_constant_1 = require("./cow.constant");
const CowSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    location: {
        type: String,
        enum: cow_constant_1.cowLocations,
        required: true,
    },
    breed: {
        type: String,
        enum: cow_constant_1.breedCow,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        enum: cow_constant_1.label,
        required: true,
    },
    category: {
        type: String,
        enum: cow_constant_1.cowCategories,
        required: true,
    },
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Cow = (0, mongoose_1.model)("Cow", CowSchema);
