import { Router } from 'express'
import {
  loginHandler,
  registerHandler,
  validateJwtHandler,
} from '../controllers/authController'
import asyncHandler from 'express-async-handler'

const router = Router()

router.post('/login', asyncHandler(loginHandler))
router.post('/signup', asyncHandler(registerHandler))
router.post('/validate', asyncHandler(validateJwtHandler))

export {
    router as authRouter,
}
