// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.create({
//     data: {
//       email: "user@test2.com",
//       name: "User1",
//     },
//   });
//   const users = await prisma.user.findMany();
//   console.log(users);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
