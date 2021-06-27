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
        this.router.get("/deliveries", deliveriesController_1.default.getDeliveries);
        this.router.get("/deliveries/:dni", deliveriesController_1.default.getDeliverybyDni);
        this.router.post("/deliveries", deliveriesController_1.default.createDelivery);
    }
}
exports.default = new DeliveriesRoutes().router;
