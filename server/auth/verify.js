import Jwt from 'jsonwebtoken';

export const verification = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if(!token){
        return res.status(400).json({success:false, message: "No token provided"})
    }

    try {
        const data = Jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = data.user
        next()
    } catch (error) {
        if (error.name === "TokenExpiredError"){
          return res.status(401).json({success:false, message:"token expired"})
      }
      return res.status(500).json({success:false, message:"invalid token"})
      }
}