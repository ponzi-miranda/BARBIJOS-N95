"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deliveriesController_1 = __importDefault(require("../controllers/deliveriesController"));
class DeliveriesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/services", deliveriesController_1.default.getServices);
    }
}
exports.default = new DeliveriesRoutes().router;
