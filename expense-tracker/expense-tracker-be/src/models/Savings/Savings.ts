import mongoose,{Document,Schema} from "mongoose";
import { ISavingGoal } from "./Savings.d";

interface ISavingsDocument extends ISavingGoal, Document {}

const SavingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
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
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Savings = mongoose.model<ISavingsDocument>('Savings', SavingSchema);

export const addSaving = async (saving: ISavingGoal) => {
    try {
        const newSaving = await Savings.create(saving);
        newSaving.save();
        return newSaving;
    } catch (error) {
        throw new Error('Error creating saving');
    }
}

export const getSavingsByUserId = async (userId: string) => {
    try {
        const savings = await Savings.find({ userId });
        return savings;
    } catch (error) {
        throw new Error('Error fetching savings by userId');
    }
}

export const getSavingById = async (id: string) => {
    try {
        const saving = await Savings.findById(id);
        return saving;
    } catch (error) {
        throw new Error('Error fetching saving by id');
    }
}

export const updateSaving = async (id: string, saving: ISavingGoal) => {
    try {
        const updatedSaving = await Savings.findByIdAndUpdate(id
            , saving, { new: true });
        return updatedSaving;
    } catch (error) {
        throw new Error('Error updating saving');
    }
}

export default Savings;