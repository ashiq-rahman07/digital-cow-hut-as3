import { SortOrder } from "mongoose";
import {
  IPagOptions,
  paginationHelpers,
} from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { cowSearchableFields } from "./cow.constant";
import { ICow, ICowFilters } from "./cow.interface";
import { Cow } from "./cow.model";

const createCow = async (user: ICow): Promise<ICow | null> => {
  const createdCow = await Cow.create(user);

  return createdCow;
};

const getAllCows = async (
  filters: ICowFilters,
  paginationOptions: IPagOptions
): Promise<IGenericResponse<ICow[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: cowSearchableFields.map((field) => ({
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

  const result = await Cow.find(whereConditions)
    .populate({ path: "User", options: { strictPopulate: false } })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Cow.countDocuments(whereConditions);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById(id).populate({
    path: "User",
    options: { strictPopulate: false },
  });

  return result;
};

const deleteSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findByIdAndDelete(id).populate({
    path: "User",
    options: { strictPopulate: false },
  });

  return result;
};

const updatedCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const CowService = {
  createCow,
  getAllCows,
  getSingleCow,
  deleteSingleCow,
  updatedCow,
};
