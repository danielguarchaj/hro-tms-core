import express from "express";

const router = express.Router();

import { getAreasController } from "../controllers/areaController";

export const getAreasRoute = router.get("/areas", getAreasController);
