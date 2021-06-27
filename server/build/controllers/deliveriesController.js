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
    //GET ENTREGAS
    async getDeliveries(req, res) {
        const deliveries = await database_1.default.query("SELECT * FROM entregas");
        console.log(deliveries);
        res.json(deliveries);
    }
    //GET ENTREGAS BY DNI
    async getDeliverybyDni(req, res) {
        const { id } = req.params;
        const entregas = await database_1.default.query("SELECT * FROM entregas WHERE id = ?", [id]);
        if (entregas.length > 0) {
            return res.json(entregas[0]);
        }
        res.status(404).json({ text: 'Entrega no encontrada' });
    }
    //POST ENTREGA
    async createDelivery(req, res) {
        await database_1.default.query("INSERT INTO entregas set?", [req.body]);
        res.json({ message: "Creando entrega" });
    }
    //DELETE ENTREGA NO SE SI HACE FALTA PERO LE MANDO X LAS DUDAS
    async delete(req, res) {
        const { id } = req.params;
        await database_1.default.query("DELETE FROM entregas WHERE id = ?", [id]);
        res.json({ message: "Entrega eliminada" });
    }
}
const deliveriesController = new DeliveriesController();
exports.default = deliveriesController;
