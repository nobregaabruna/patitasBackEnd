import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main( ) {
    await prisma.comprador.createMany({data:[
        {
        nome:"Bruno",
        email:"example1@email.com",
        cep:"12345678",
        celular:"12 123456789",
        pagamento:"Crédito",
    },
    {
      nome:"Angelo",
      email:"example2@email.com",
      cep:"12345678",
      celular:"12 123456789",
      pagamento:"Crédito",
    }
    ]
        
    });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });