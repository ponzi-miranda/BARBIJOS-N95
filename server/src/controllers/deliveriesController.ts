import { Request, Response } from "express";
import pool from "../database";

// Controlador de Entregas
class DeliveriesController {
  //GET - Servicios
  public async getServices(req: Request, res: Response): Promise<any> {
    try {
      const services = await pool.query("SELECT * FROM servicios");
      return res.json({ message: 'Successful', data: services });
    } catch (error) {
      res.status(404).json({ message: 'Failed', code: 404 });
    }
  }

  //GET - Roles
  public async getRoles(req: Request, res: Response): Promise<any> {
    try {
      const roles = await pool.query("SELECT * FROM roles");
      return res.json({ message: 'Successful', data: roles });
    } catch (error) {
      res.status(404).json({ message: 'Failed', code: 404 });
    }
  }

  //GET - Todas las entregas
  public async getDeliveries(req: Request, res: Response): Promise<any> {
    try {
      const deliveries = await pool.query("SELECT * FROM entregas");
      return res.json({ message: 'Successful', data: deliveries });
    } catch (error) {
      res.status(404).json({ message: 'Failed', code: 404 });
    }
  }

  //GET - Buscar entregas por dni
  public async getDeliveryByDni(req: Request, res: Response): Promise<any> {
    try {
      const { dni } = req.query;
      const entregas = await pool.query('SELECT e.* FROM entregas e JOIN personas p ON e.idPersona = p.id WHERE p.dni = ?', [dni]);
      
      if (entregas.length == 0) {
        return res.json({ message: 'No existen registros', isRegistered: false })
      } else {
        const person = await pool.query('SELECT * FROM personas WHERE dni = ?', [dni]);
        if (!person) {
          res.status(404).json({ message: 'Failed - Person not found', code: 404 });
        }
        return res.json({ message: 'Successful', isRegistered: true, data: entregas, personData: person })
      }
    } catch (error) {
      res.status(404).json({ message: 'Failed', code: 404 });
    }
  }

  // POST - Nueva Entrega
  public async createDelivery(req: Request, res: Response): Promise<any> {
    try {
      if (req.body) {
        await pool.query("INSERT INTO entregas set?", [req.body]);
        return res.json({ message: 'Delivery Created!' });
      } else {
        return res.json({ message: 'Parametros o syntax invalidos' });
      }
    } catch (error) {
      res.status(404).json({ message: 'Failed', code: 404 });
    }
  }

  //DELETE - Entrega
  public async delete(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      if (id) {
        await pool.query("DELETE FROM entregas WHERE id = ?", [id]);
        return res.json({ message: "Delivery deleted!" });
      } else {
        return res.json({ message: 'Parametros o syntax invalidos' });
      }
    } catch (error) {
      res.status(404).json({ message: 'Failed', code: 404 });
    }
  }
}

const deliveriesController = new DeliveriesController();
export default deliveriesController;
