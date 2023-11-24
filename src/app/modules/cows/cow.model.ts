import { Schema, model } from "mongoose";
import { CowModel, ICow } from "./cow.interface";
import { breedCow, cowCategories, cowLocations, label } from "./cow.constant";

const CowSchema = new Schema<ICow>(
  {
    name: {
      type: String,
      required: true,
    },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    location: {
      type: String,
      enum: cowLocations,
      required: true,
    },
    breed: {
      type: String,
      enum: breedCow,
      required: true,
    },
    weight: {
      type: String,

      required: true,
    },
    label: {
      type: String,
      enum: label,
      required: true,
    },
    category: {
      type: String,
      enum: cowCategories,
      required: true,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Cow = model<ICow, CowModel>("Cow", CowSchema);
