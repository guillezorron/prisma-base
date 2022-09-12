const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'Pepito',
      email: 'pepito@mail.com',
      posts: {
        create: { title: 'Post de pepito' },
      },
      profile: {
        create: { bio: 'Me gusta el ping pong' },
      },
    }
  })
  console.log('user created')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })