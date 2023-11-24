import { Model, Types } from "mongoose";
import { IUser } from "../user/user.interface";

export type ICow = {
  name: string;
  age: number;
  price: number;
  location:
    | "Dhaka"
    | "Chattogram"
    | "Barishal"
    | "Rajshahi"
    | "Sylhet"
    | "Comilla"
    | "Rangpur"
    | "Mymensingh";
  breed:
    | "Brahman"
    | "Nellore"
    | "Sahiwal"
    | "Gir"
    | "Indigenous"
    | "Tharparkar"
    | "Kankrej";
  weight: string;
  label: "for sale" | "sold out";
  category: "Dairy" | "Beef" | "DualPurpose";
  seller: Types.ObjectId | IUser;
};

export type ICowFilters = {
  searchTerm?: string;
  name?: string;
  age?: number;
  price?: number;
  location?: string;
  breed?: string;
  weight?: string;
  label?: string;
  category?: string;
};

export type CowModel = Model<ICow, Record<string, unknown>>;
