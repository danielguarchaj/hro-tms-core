import express from "express";
const router = express.Router();
import { createAppointmentController } from "../controllers/appointmentsController";

export const createAppointmentRoute = router.post(
  "/appointments",
  createAppointmentController
);
