import { RequestHandler, Request, Response } from "express";
import { CowService } from "./cow.sevice";
import pick from "../../../shared/pick";
import httpStatus from "http-status";
import { cowFilterableField } from "./cow.constant";
import { paginationFields } from "../../../constants/pagination";

const createCow: RequestHandler = async (req, res, next) => {
  try {
    const cow = req.body;
    const result = await CowService.createCow(cow);
    res.status(200).json({
      success: true,
      message: "Cow created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCows = async (req: Request, res: Response) => {
  const filters = pick(req.query, cowFilterableField);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await CowService.getAllCows(filters, paginationOptions);

  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Cows retrieved successfully !",
    meta: result.meta,
    data: result.data,
  });
};

const getSingleCow = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await CowService.getSingleCow(id);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Cows retrieved successfully !",
    data: result,
  });
};

const deleteSingleCow = async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CowService.deleteSingleCow(id);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Cows delete successfully !",
    data: result,
  });
};

const updatedCow = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await CowService.updatedCow(id, updatedData);

  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Cow update successfully !",
    data: result,
  });
};

export const CowController = {
  createCow,
  getAllCows,
  getSingleCow,
  deleteSingleCow,
  updatedCow,
};
