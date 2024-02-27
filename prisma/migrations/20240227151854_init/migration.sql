-- CreateTable
CREATE TABLE "Comprador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "pagamento" TEXT NOT NULL,

    CONSTRAINT "Comprador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "categoria" TEXT,
    "preco" DOUBLE PRECISION NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "disponivel" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comprador_email_key" ON "Comprador"("email");
