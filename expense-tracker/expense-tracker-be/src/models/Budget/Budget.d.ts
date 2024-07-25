import {Document} from 'mongoose';

export interface IBudget {
    userId: string;
    month: string; 
    amount: number;
    createdAt?: Date;
    updatedAt?: Date;
  }

export interface IBudgetDocument extends IBudget, Document {}