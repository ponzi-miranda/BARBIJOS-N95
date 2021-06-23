import express, { Router } from "express";
import deliveriesController from "../controllers/deliveriesController";

class DeliveriesRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/services", deliveriesController.getServices);
  }
}

export default new DeliveriesRoutes().router;
