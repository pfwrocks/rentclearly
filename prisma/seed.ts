import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.apartment.create({
        data: {
            name: 'The Drexel At Oakley',
            address: '3827 Paxton Ave, Cincinnati, OH 45209',
            rent: 1899
        }
    });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
