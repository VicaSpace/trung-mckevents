import { prisma } from '@/db';
import { logger } from '@/utils/logger';

async function getEventDates() {
  try {    
    const eventDates = await prisma.eventDate.findMany({
        include: {
            users: true,
            event: true
        }
    });    
    return eventDates;
  } catch (e) {
    logger.error(e);
  }
}

async function getEvents() {
    try {    
      const eventDates = await prisma.event.findMany({
          include: {
              eventDates: {
                include: {
                    users: true,
                }
              },
              office: true
          }
      });    
      return eventDates;
    } catch (e) {
      logger.error(e);
    }
  }
  

export { getEventDates, getEvents };
