import mongoose,{Document,Schema} from "mongoose";
import { ISavingGoal } from "./Savings.d";

interface ISavingsDocument extends ISavingGoal, Document {}

const SavingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    targetAmount: {
        type: Number,
        required: true
    },
    currentAmount: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Savings = mongoose.model<ISavingsDocument>('Savings', SavingSchema);

export default Savings;