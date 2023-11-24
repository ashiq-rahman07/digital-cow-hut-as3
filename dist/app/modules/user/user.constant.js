"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFilterableField = exports.userSearchableFields = exports.userRole = void 0;
exports.userRole = ["seller", "buyer"];
exports.userSearchableFields = [
    "id",
    "role",
    "phoneNumber",
    "name.firstName",
    "name.lastName",
    "address",
    "budget",
    "income",
];
exports.userFilterableField = [
    "searchTerm",
    "role",
    "phoneNumber",
    "address",
    "budget",
    "income",
];
