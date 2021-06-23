import { Request, Response } from "express";
import pool from "../database";

// Controlador de Entregas
class DeliveriesController {
  public async getServices(req: Request, res: Response): Promise<void> {
    const services = await pool.query("SELECT * FROM servicios");
    console.log(services);
    res.json(services);
  }
}

const deliveriesController = new DeliveriesController();
export default deliveriesController;
