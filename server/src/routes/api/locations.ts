import { Router } from "express";
import { prisma } from "../../prisma";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const locationsWithCount = await prisma.location.findMany({
      include: {
        _count: {
          select: { chargers: true },
        },
      },
    });
    const locations = locationsWithCount.map((l: any) => {
      const {
        _count: { chargers },
        ...loc
      } = l;
      return { ...loc, chargerCount: chargers };
    });
    res.json(locations);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const location = await prisma.location.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        chargers: true,
      },
    });
    res.json(location);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  // TODO data validation
  try {
    const location = await prisma.location.create({
      data: {
        name: req.body.name,
        location: req.body.locationNo,
        postalCode: String(req.body.postalCode),
        country: req.body.country,
        chargers: {
          createMany: req.body.chargers,
        },
      },
    });
    res.json(location);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedLocation = await prisma.location.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });
    res.json(updatedLocation);
  } catch (err) {
    next(err);
  }
});

export default router;
