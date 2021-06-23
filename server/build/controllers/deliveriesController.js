"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
// Controlador de Entregas
class DeliveriesController {
    async getServices(req, res) {
        const services = await database_1.default.query("SELECT * FROM servicios");
        console.log(services);
        res.json(services);
    }
}
const deliveriesController = new DeliveriesController();
exports.default = deliveriesController;
