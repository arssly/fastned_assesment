/*
  Warnings:

  - Changed the type of `serialNumber` on the `charger` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `city` to the `location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "charger" DROP COLUMN "serialNumber",
ADD COLUMN     "serialNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "location" ADD COLUMN     "city" TEXT NOT NULL,
ALTER COLUMN "lastUpdated" DROP DEFAULT;
