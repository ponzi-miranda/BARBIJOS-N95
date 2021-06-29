import express, { Router } from "express";
import deliveriesController from "../controllers/deliveriesController";

class DeliveriesRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/services", deliveriesController.getServices);
    this.router.get("/", deliveriesController.getDeliveries);
    this.router.get("/search", deliveriesController.getDeliveryByDni);
    this.router.post("/", deliveriesController.createDelivery);
    this.router.delete("/", deliveriesController.delete);
  }
}

export default new DeliveriesRoutes().router;
