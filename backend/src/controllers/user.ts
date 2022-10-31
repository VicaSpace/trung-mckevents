import { Request, Response } from 'express';

import { getUsers } from '@/services/userService';

async function getAllUsers(req: Request, res: Response) {
  res.status(200).json(await getUsers());
}

export { getAllUsers };
