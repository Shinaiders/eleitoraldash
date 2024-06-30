-- AlterTable
ALTER TABLE "Votos" ADD COLUMN     "valido" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Validar" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "votosId" INTEGER NOT NULL,

    CONSTRAINT "Validar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Validar" ADD CONSTRAINT "Validar_votosId_fkey" FOREIGN KEY ("votosId") REFERENCES "Votos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
