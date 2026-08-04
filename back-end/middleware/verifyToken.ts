import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  auth?: string | jwt.JwtPayload;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("JWT_SECRET is not defined");
        }
        
        const decoded = jwt.verify(token, secret);

        (req as AuthRequest).auth = decoded;

        next();
    } catch (error) {
        return res.status(403).json({
        message: 'Forbidden - Invalid or expired token',
        });
    }
}