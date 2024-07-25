// models/User/User.ts
import { Schema, model, Document } from 'mongoose';
import { IUser } from './User.d';

interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const User = model<IUserDocument>('User', UserSchema);

export const createUser = async (user: IUser) => {
    try {
        const newUser = await User.create(user);
        newUser.save();
        return newUser;
    } catch (error) {
        throw new Error('Error creating user');
    }
};

export const getUserByEmail = async (email: string) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw new Error('Error fetching user by email');
    }
};

export const getAllUsers = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error('Error fetching all users');
    }
};

const userActions = {
    User,
    createUser,
    getUserByEmail,
    getAllUsers,
};

export default userActions;
