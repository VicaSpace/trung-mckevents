import { prisma } from '@/db';
import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

const login = async (username, password) => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        username,
        password,
      },
    })

    const accessToken = jwt.sign(
      {
        id: user.id,
        username,
        email: user.email
      },
      process.env.JWT_PRIVATEKEY,
      {
        expiresIn: '48h',
      }
    )
    return { accessToken }
  } catch (err) {
    throw createHttpError(401, 'authentication failed')
  }
}

const register = async (user) => {
  const lookupUser = await prisma.user.findFirst({
    where: {
      username: user.username,
    },
  })
  if (lookupUser) {
    throw createHttpError(400, 'username already existed')
  }
  const createdUser = await prisma.user.create({
    data: {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  })
  return createdUser
}

const validateJwt = (token) => {
  try {
    const { accessToken } = token    
    return jwt.verify(accessToken, process.env.JWT_PRIVATEKEY)    
  } catch (err) {
    throw createHttpError(403, 'invalid token')
  }
}

export {
  login,
  register,
  validateJwt,
}
