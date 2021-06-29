"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
// Controlador de Entregas
class DeliveriesController {
    //GET - Servicios
    async getServices(req, res) {
        try {
            const services = await database_1.default.query("SELECT * FROM servicios");
            return res.json({ message: 'Successful', data: services });
        }
        catch (error) {
            res.status(404).json({ message: 'Failed', code: 404 });
        }
    }
    //GET - Roles
    async getRoles(req, res) {
        try {
            const roles = await database_1.default.query("SELECT * FROM roles");
            return res.json({ message: 'Successful', data: roles });
        }
        catch (error) {
            res.status(404).json({ message: 'Failed', code: 404 });
        }
    }
    //GET - Todas las entregas
    async getDeliveries(req, res) {
        try {
            const deliveries = await database_1.default.query("SELECT * FROM entregas");
            return res.json({ message: 'Successful', data: deliveries });
        }
        catch (error) {
            res.status(404).json({ message: 'Failed', code: 404 });
        }
    }
    //GET - Buscar entregas por dni
    async getDeliveryByDni(req, res) {
        try {
            const { dni } = req.query;
            const entregas = await database_1.default.query('SELECT e.* FROM entregas e JOIN personas p ON e.idPersona = p.id WHERE p.dni = ?', [dni]);
            if (entregas.length == 0) {
                return res.json({ message: 'No existen registros', isRegistered: false });
            }
            else {
                const person = await database_1.default.query('SELECT * FROM personas WHERE dni = ?', [dni]);
                if (!person) {
                    res.status(404).json({ message: 'Failed - Person not found', code: 404 });
                }
                return res.json({ message: 'Successful', isRegistered: true, data: entregas, personData: person });
            }
        }
        catch (error) {
            res.status(404).json({ message: 'Failed', code: 404 });
        }
    }
    // POST - Nueva Entrega
    async createDelivery(req, res) {
        try {
            if (req.body) {
                await database_1.default.query("INSERT INTO entregas set?", [req.body]);
                return res.json({ message: 'Delivery Created!' });
            }
            else {
                return res.json({ message: 'Parametros o syntax invalidos' });
            }
        }
        catch (error) {
            res.status(404).json({ message: 'Failed', code: 404 });
        }
    }
    //DELETE - Entrega
    async delete(req, res) {
        try {
            const { id } = req.params;
            if (id) {
                await database_1.default.query("DELETE FROM entregas WHERE id = ?", [id]);
                return res.json({ message: "Delivery deleted!" });
            }
            else {
                return res.json({ message: 'Parametros o syntax invalidos' });
            }
        }
        catch (error) {
            res.status(404).json({ message: 'Failed', code: 404 });
        }
    }
}
const deliveriesController = new DeliveriesController();
exports.default = deliveriesController;
