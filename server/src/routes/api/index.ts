import { Router } from "express";
import LocationRouter from "./locations";
import ChargerRouter from "./chargers";

const router = Router();

router.use("/locations", LocationRouter);
router.use("/locations/:lid/chargers", ChargerRouter);

export default router;
