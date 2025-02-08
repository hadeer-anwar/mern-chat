import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    const payload = {
        _id: user._id,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

export default generateToken;