import { Document } from "mongoose";

export interface ISavingGoal {
    userId: string;
    title?: string;
    targetAmount: number;
    currentAmount?: number;
    monthly: boolean;
    startDate: Date;
    endDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ISavingsDocument extends ISavingGoal, Document {}