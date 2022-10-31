import { Router } from 'express';
import { userRouter } from './userRoutes';
import { eventRouter } from './eventRoutes';

const router = Router();
router.use('/users', userRouter);
router.use('/events', eventRouter);

export default router;

