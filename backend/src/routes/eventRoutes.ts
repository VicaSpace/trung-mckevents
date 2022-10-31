import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getAllEventDates, getAllEvents } from '@/controllers/event';

const router = Router();

router.get('/', asyncHandler(getAllEvents));
router.get('/eventDates', asyncHandler(getAllEventDates));

export { router as eventRouter };