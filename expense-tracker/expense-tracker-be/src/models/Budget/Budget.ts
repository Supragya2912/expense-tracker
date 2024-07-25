import mongoose, {Document,Schema} from "mongoose";
import { IBudget } from "./Budget.d";

interface IBudgetDocument extends IBudget, Document {}

const budgetSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    month: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Budget = mongoose.model<IBudgetDocument>('Budget', budgetSchema);

export default Budget;