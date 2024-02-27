/*
  Warnings:

  - A unique constraint covering the columns `[carrinhoId]` on the table `Comprador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carrinhoId` to the `Comprador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carrinhoId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comprador" ADD COLUMN     "carrinhoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "carrinhoId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comprador_carrinhoId_key" ON "Comprador"("carrinhoId");

-- AddForeignKey
ALTER TABLE "Comprador" ADD CONSTRAINT "Comprador_carrinhoId_fkey" FOREIGN KEY ("carrinhoId") REFERENCES "Carrinho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_carrinhoId_fkey" FOREIGN KEY ("carrinhoId") REFERENCES "Carrinho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
