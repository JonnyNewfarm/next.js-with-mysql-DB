/*
  Warnings:

  - You are about to drop the column `email` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `followers` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `product` table. All the data in the column will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `product_email_key` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `email`,
    DROP COLUMN `followers`,
    DROP COLUMN `isActive`,
    DROP COLUMN `registeredAt`,
    ADD COLUMN `price` DOUBLE NOT NULL;
