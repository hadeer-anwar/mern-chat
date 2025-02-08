import asyncWrapper from '../../middlewares/asyncWrapper.js'
import { register } from "../service/user.service.js"

const tokenOption = {
    httpOnly: true,     // prevent xss attack
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',   // prevent csrf attack
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie valid for 7 days
  }

export const Register = asyncWrapper(async (req, res, next)=>{
    const userData = {
        username: req.body.username,
        password: req.body.password
    }

   const {user, token} = await register(userData);

    res.status(201).cookie("token", token, tokenOption).json({
        success:true,
        message: "user register successful",
        data: {
            user,
            token
        }
    })
})