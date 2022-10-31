import { login, register, validateJwt } from '@/services/auth'

const loginHandler = async (req, res) => {
  const data = await login(req.body.username, req.body.password)
  res.json(data)
}

const registerHandler = async (req, res) => {
  const data = await register(req.body)
  res.status(201).json(data)
}

const validateJwtHandler = (req, res) => {
  const user = validateJwt(req.body)
  res.status(200).json(user)
}

export {
  loginHandler,
  registerHandler,
  validateJwtHandler,
}
