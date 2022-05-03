import { Router } from "express";
import { prisma } from "@src/prisma";

const router = Router({ mergeParams: true });

router.get("/", async (req, res, next) => {
  const { lid } = req.params as { lid: string };
  try {
    const chargers = await prisma.charger.findMany({
      where: {
        locationId: Number(lid),
      },
    });
    res.json(chargers);
  } catch (err) {
    next(err);
  }
});

export default router;
