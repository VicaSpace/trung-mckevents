import { Request, Response } from 'express';

import { getEventDates, getEvents } from '@/services/eventService'
 
async function getAllEventDates(req: Request, res: Response) {
  res.status(200).json(await getEventDates());
}

async function getAllEvents(req: Request, res: Response) {
    res.status(200).json(await getEvents());
  }
  

export { getAllEventDates, getAllEvents };
