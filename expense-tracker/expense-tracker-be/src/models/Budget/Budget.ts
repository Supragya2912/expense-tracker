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

export const addBudget = async (budget: IBudget) => {
    try {
        const newBudget = await Budget.create(budget);
        newBudget.save();
        return newBudget;
    } catch (error) {
        throw new Error('Error creating budget');
    }
}

export const updateBudget = async (userId: string, budget: IBudget) => {
    try {
        const updatedBudget = await Budget.findOneAndUpdate({ userId }, budget, { new: true });
        return updatedBudget;
    } catch (error) {
        throw new Error('Error updating budget');
    }
}

export const getBudgetByUserId = async (userId: string) => {
    try {
        const budget = await Budget.findOne({ userId });
        return budget;
    } catch (error) {
        throw new Error('Error fetching budget by userId');
    }
}

export default Budget;