
import { Document } from 'mongoose';

export interface IUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserDocument extends IUser, Document {}
