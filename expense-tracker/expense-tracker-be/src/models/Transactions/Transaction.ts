import mongoose, { Document, Schema } from 'mongoose';
import { ITransaction } from './Transaction.d';

interface ITransactionDocument extends ITransaction, Document {}

const TransactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true });

const Transaction = mongoose.model<ITransactionDocument>('Transaction', TransactionSchema);

export const addTransaction = async (transaction: ITransaction) => {
    try {
        const newTransaction = await Transaction.create(transaction);
        newTransaction.save();
        return newTransaction;
    } catch (error) {
        throw new Error('Error creating transaction');
    }
}

export const getTransactionsByUserId = async (userId: string) => {
    try {
        const transactions = await Transaction.find({ userId });
        return transactions;
    } catch (error) {
        throw new Error('Error fetching transactions by userId');
    }
}

export const getTransactionById = async (id: string) => {
    try {
        const transaction = await Transaction.findById(id);
        return transaction;
    } catch (error) {
        throw new Error('Error fetching transaction by id');
    }
}


export const deleteTransaction = async (id: string) => {
    try {
        await Transaction.findByIdAndDelete(id);
        return true;
    } catch (error) {
        throw new Error('Error deleting transaction');
    }
}


export default Transaction;