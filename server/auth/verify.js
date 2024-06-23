import Jwt from 'jsonwebtoken';

export const verification = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if(!token){
        return res.status(401).json({success:false, message: "No token provided"})
    }

    try {
        const data = Jwt.verify(token, process.env.JWT_SECRET_kEY)
        req.user = data.user
        next()
    } catch (error) {
        res.status(401).json({success:false, message: "Token is not valid"})
    }
}