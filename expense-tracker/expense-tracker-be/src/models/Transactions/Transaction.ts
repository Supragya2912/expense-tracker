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

export default Transaction;