import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getAllUsers } from '@/controllers/user';

const router = Router();

router.get('/', asyncHandler(getAllUsers));

export { router as userRouter };