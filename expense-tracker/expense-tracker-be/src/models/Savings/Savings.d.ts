import { Document } from "mongoose";

export interface ISavingGoal {
    userId: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    deadline: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ISavingsDocument extends ISavingGoal, Document {}