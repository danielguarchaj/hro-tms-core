import express from "express";
const router = express.Router();
import {
  createTurnController,
  getTurnsOfTheDayController,
} from "../controllers/turnController";

export const createTurnRoute = router.post("/turns", createTurnController);
export const getTurnsOfTheDayRoute = router.get(
  "/turns/today",
  getTurnsOfTheDayController
);
