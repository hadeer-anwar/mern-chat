import express from 'express'
import { Register } from '../user/controller/user.controller.js'

const userRouter= express.Router();

userRouter.post("/register", Register)

export default userRouter;