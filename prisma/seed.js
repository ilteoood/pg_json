import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const users = [];
for (let i = 0; i < 100; i++) {
    users.push({
        id: i,
        first_name: `Matteo Pietro ${i}`,
        last_name: `Dazzi ${i}`,
        birth_date: new Date(`${1924 + i}-01-01`)
    })
}

await prisma.users.deleteMany()

await prisma.users.createMany({
    data: users
})

prisma.$disconnect()