-- CreateEnum
CREATE TYPE "chargerTypes" AS ENUM ('HPC', 'T52', 'T53C');

-- CreateEnum
CREATE TYPE "chargerStatus" AS ENUM ('CONNECTED', 'NOT_CONNECTED', 'REMOVED');

-- CreateTable
CREATE TABLE "charger" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "chargerTypes" NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "status" "chargerStatus" NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "charger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" INTEGER NOT NULL,
    "postalCode" TEXT NOT NULL,
    "latUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "charger" ADD CONSTRAINT "charger_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
