import { Model } from "mongoose";

export type IUserName = {
  firstName: string;
  lastName: string;
};

export type IUserRole = "seller" | "buyer";

export type IUser = {
  name: IUserName;
  role: IUserRole;
  password: string;
  phoneNumber: string;

  address: string;
  budget: number;
  income: number;
};

export type IUserFilters = {
  searchTerm?: string;
  role?: string;
  phoneNumber?: string;
  address?: string;
  budget?: number;
  income?: number;
};
export type UserModel = Model<IUser, Record<string, unknown>>;
