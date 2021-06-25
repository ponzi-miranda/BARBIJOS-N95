import express, { Router } from "express";
import deliveriesController from "../controllers/deliveriesController";

class DeliveriesRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/services", deliveriesController.getServices);
    this.router.get("/deliveries", deliveriesController.getDeliveries);
    this.router.get("/deliveries/:dni", deliveriesController.getDeliverybyDni);
    this.router.post("/deliveries", deliveriesController.createDelivery);
    this.router.delete("/deliveries", deliveriesController.delete);
  }
}

export default new DeliveriesRoutes().router;
