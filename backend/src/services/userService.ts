import { prisma } from '@/db';
import { logger } from '@/utils/logger';

async function getUsers() {
  try {    
    const users = await prisma.user.findMany({
        include: {
            eventDates: true
        }
    });    
    return users;
  } catch (e) {
    logger.error(e);
  }
}

export { getUsers };
