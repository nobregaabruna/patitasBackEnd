import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main( ) {
    await prisma.comprador.deleteMany();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });