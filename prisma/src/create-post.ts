import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.todos.create({
    data: {
      title: 'title of post',
      description: 'hshshsh',
    },
  });
}

main()
  .then(async () => {
    console.log('done');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
