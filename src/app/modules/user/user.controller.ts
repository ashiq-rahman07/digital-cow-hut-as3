import { RequestHandler, Response, Request } from "express";
import { UsersService } from "./user.service";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import httpStatus from "http-status";
import { userFilterableField } from "./user.constant";

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await UsersService.createUser(user);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterableField);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await UsersService.getAllUsers(filters, paginationOptions);

  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully !",
    meta: result.meta,
    data: result.data,
  });
};
export const UserController = {
  createUser,
  getAllUsers,
};
