import { SortOrder } from "mongoose";
import {
  IPagOptions,
  paginationHelpers,
} from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IUser, IUserFilters } from "./user.interface";
import { User } from "./user.model";
import { userSearchableFields } from "./user.constant";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);

  return createdUser;
};

const getAllUsers = async (
  filters: IUserFilters,
  paginationOptions: IPagOptions
): Promise<IGenericResponse<IUser[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await User.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await User.countDocuments(whereConditions);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const UsersService = {
  createUser,
  getAllUsers,
};
