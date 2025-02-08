import User from "../model/user.model.js";
import appError from '../../utils/appError.js';
import generateToken from '../../utils/generateToken.js'

export const register = async (data)=>{
    const user = await User.create(data);
    if(!user)
        throw new appError("can't register user")
    return {
        user,
        token: generateToken({_id: user._id})
    }

}