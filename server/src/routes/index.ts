import { Router } from "express";
import APIRouter from "./api";

const router = Router();

router.use("/api", APIRouter);

export default router;
