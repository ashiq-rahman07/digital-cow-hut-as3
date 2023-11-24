"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowController = void 0;
const cow_sevice_1 = require("./cow.sevice");
const pick_1 = __importDefault(require("../../../shared/pick"));
const http_status_1 = __importDefault(require("http-status"));
const cow_constant_1 = require("./cow.constant");
const pagination_1 = require("../../../constants/pagination");
const createCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cow = req.body;
        const result = yield cow_sevice_1.CowService.createCow(cow);
        res.status(200).json({
            success: true,
            message: "Cow created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllCows = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, cow_constant_1.cowFilterableField);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield cow_sevice_1.CowService.getAllCows(filters, paginationOptions);
    res.status(200).json({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cows retrieved successfully !",
        meta: result.meta,
        data: result.data,
    });
});
const getSingleCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cow_sevice_1.CowService.getSingleCow(id);
    res.status(200).json({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cows retrieved successfully !",
        data: result,
    });
});
const deleteSingleCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cow_sevice_1.CowService.deleteSingleCow(id);
    res.status(200).json({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cows delete successfully !",
        data: result,
    });
});
const updatedCow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield cow_sevice_1.CowService.updatedCow(id, updatedData);
    res.status(200).json({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cow update successfully !",
        data: result,
    });
});
exports.CowController = {
    createCow,
    getAllCows,
    getSingleCow,
    deleteSingleCow,
    updatedCow,
};
