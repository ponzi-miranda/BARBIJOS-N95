import { Request, Response } from "express";
import pool from "../database";

// Controlador de Entregas
class DeliveriesController {

  //GET SERVICIOS
  public async getServices(req: Request, res: Response): Promise<void> {
    const roles = await pool.query("SELECT * FROM servicios");
    res.json(roles);
  }

  //GET ROLES
  public async getRoles(req: Request, res: Response): Promise<void> {
    const services = await pool.query("SELECT * FROM roles");
    res.json(services);
  }

  //GET ENTREGAS

  public async getDeliveries(req: Request, res: Response): Promise<void> {
    const deliveries = await pool.query("SELECT * FROM entregas");
    res.json(deliveries);
  }

  //GET ENTREGAS BY DNI

  public async getDeliverybyDni(req: Request, res: Response): Promise<any> {
      const { id } = req.params;
      const entregas = await pool.query("SELECT * FROM entregas WHERE id = ?", [id]);
      if (entregas.length > 0){
        return res.json(entregas[0]);
      }
      res.status(404).json({text: 'Entrega no encontrada'});
  }
  //POST ENTREGA
  public async createDelivery (req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO entregas set?", [req.body]);
    res.json({message: "Creando entrega"});
  }

  //DELETE ENTREGA
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM entregas WHERE id = ?", [id]);
    res.json({message: "Entrega eliminada" });
  }
}

const deliveriesController = new DeliveriesController();
export default deliveriesController;
