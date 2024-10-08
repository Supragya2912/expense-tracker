import { Document } from "mongoose";

export interface ITransaction {
    userId: string;
    type: 'income' | 'expense';
    title: string;
    amount: number;
    date: Date;
    merchant?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

export interface ITransactionDocument extends ITransaction, Document {}