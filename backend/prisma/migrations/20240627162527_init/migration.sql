-- CreateTable
CREATE TABLE "Vereadores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "partido" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Vereadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prefeito" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "partido" TEXT NOT NULL,
    "numero" TEXT NOT NULL,

    CONSTRAINT "Prefeito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Votos" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "prefeitoId" INTEGER NOT NULL,
    "vereadoresId" INTEGER NOT NULL,

    CONSTRAINT "Votos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vereadores_numero_key" ON "Vereadores"("numero");

-- AddForeignKey
ALTER TABLE "Votos" ADD CONSTRAINT "Votos_prefeitoId_fkey" FOREIGN KEY ("prefeitoId") REFERENCES "Prefeito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votos" ADD CONSTRAINT "Votos_vereadoresId_fkey" FOREIGN KEY ("vereadoresId") REFERENCES "Vereadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
