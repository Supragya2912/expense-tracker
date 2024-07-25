// middleware/auth.ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { getUserById } from '../models/User/User';
import { IUserDocument } from '../models/User/User.d';

interface JwtPayload {
  userId: string;
}

interface RequestExtended extends Request {
  user?: IUserDocument;
}

const auth = async (req: RequestExtended, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
    const user = await getUserById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Not authorized, user not found' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error('Error in auth middleware:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export default auth;
