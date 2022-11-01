import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUsersWithEventDates() {
  await prisma.user.create({
    data: {
      username: 'trung',
      firstName: 'Trung',
      lastName: 'Ngo',
      phoneNumber: '0703300037',
      password: 'password',
      email: 'trung@gmail.com',
      eventDates: {
        create: [
          { eventId: 1, date: new Date('2022-11-01T19:00:00').toISOString() },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      username: 'richard',
      firstName: 'Richard',
      lastName: 'Tang',
      email: 'richard@gmail.com',
      phoneNumber: '0123987974',
      password: 'password',
      eventDates: {
        create: [
          { eventId: 2, date: new Date('2022-11-02T17:00:00').toISOString() },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      username: 'minh',
      firstName: 'Minh',
      lastName: 'Nguyen',
      email: 'minh@gmail.com',
      phoneNumber: '0163485737',
      password: 'password',
      eventDates: {
        create: [{ eventId: 3, date: new Date('2022-11-03T18:00:00').toISOString() }],
      },
    },
  });

  await prisma.user.create({
    data: {
      username: 'anh',
      firstName: 'Anh',
      lastName: 'Nguyen',
      email: 'anh@gmail.com',
      phoneNumber: '097987877',
      password: 'password',
      eventDates: {
        create: [{ eventId: 2, date: new Date('2022-10-31').toISOString() }],
      },
    },
  });
}

async function createOffices() {
  await prisma.office.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Ho Chi Minh Office',
    },
  });
}

async function createEvents() {
  await prisma.event.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Sup on Sai Gon River',
      status: 'Finalized',
      officeId: 1,
      location: 'Sai Gon River, Ho Chi Minh city',
      minimumUser: 2,
    },
  });

  await prisma.event.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Weekend Soccer Match',
      status: 'Registered',
      officeId: 1,
      location: 'Binh Cuoi Soccer Field',
      minimumUser: 2,
    },
  });

  await prisma.event.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Badminton',
      status: 'Registered',
      officeId: 1,
      location: 'Thanh Nhan Badminton',
      minimumUser: 2,
    },
  });
}

async function main() {
  await createOffices();
  await createEvents();
  await createUsersWithEventDates();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .catch(async (_err) => {
    await prisma.$disconnect();
    process.exit(1);
  });
