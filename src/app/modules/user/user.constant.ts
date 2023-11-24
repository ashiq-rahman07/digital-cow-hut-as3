import { IUserRole } from "./user.interface";

export const userRole: IUserRole[] = ["seller", "buyer"];

export const userSearchableFields = [
  "id",
  "role",
  "phoneNumber",
  "name.firstName",
  "name.lastName",
  "address",
  "budget",
  "income",
];
export const userFilterableField = [
  "searchTerm",
  "role",
  "phoneNumber",
  "address",
  "budget",
  "income",
];
