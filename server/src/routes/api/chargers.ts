import { Router } from "express";
import { prisma } from "../../prisma";

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

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const charger = await prisma.charger.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(charger);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { lid } = req.params as { lid: string };
  try {
    const charger = await prisma.charger.create({
      data: {
        type: req.body.type,
        serialNumber: req.body.serialNumber,
        status: req.body.status,
        locationId: Number(lid),
      },
    });
    res.json(charger);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { lid, id } = req.params as { lid: string; id: string };
  try {
    const updatedCharger = await prisma.charger.update({
      where: {
        id: Number(id),
      },
      data: { ...req.body, locationId: Number(lid) },
    });
    res.json(updatedCharger);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCharger = await prisma.charger.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deletedCharger);
  } catch (err) {
    next(err);
  }
});

export default router;
