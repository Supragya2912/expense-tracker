import mongoose, {  Schema } from "mongoose";
import { ISavingGoal, ISavingsDocument } from "./Savings.d";

const SavingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        // required: true
    },
    monthly: {
        type: Boolean,
        required: true
    },
    targetAmount: {
        type: Number,
        // required: true
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

export const addSaving = async (saving: ISavingGoal): Promise<ISavingsDocument> => {
    try {
        const newSaving = new Savings(saving);
        await newSaving.save();
        return newSaving;
    } catch (error) {
        throw new Error('Error creating saving: ' );
    }
}

export const addAmountToSaving = async (id: string, amount: number): Promise<ISavingsDocument | null> => {
    try {
        const saving = await Savings.findById(id);
        if (!saving) {
            throw new Error('Saving not found');
        }

        if (saving.currentAmount !== undefined) {
            saving.currentAmount += amount;
        }
        const updatedSaving = await saving.save();
        return updatedSaving;
    } catch (error) {
        throw new Error('Error adding amount to saving: ' );
    }
}

export const getSavingsByUserId = async (userId: string): Promise<ISavingsDocument[]> => {
    try {
        const savings = await Savings.find({ userId });
        return savings;
    } catch (error) {
        throw new Error('Error fetching savings by userId: ' );
    }
}

export const getSavingById = async (id: string): Promise<ISavingsDocument | null> => {
    try {
        const saving = await Savings.findById(id);
        return saving;
    } catch (error) {
        throw new Error('Error fetching saving by id: ' );
    }
}

export const updateSaving = async (id: string, saving: ISavingGoal): Promise<ISavingsDocument | null> => {
    try {
        const updatedSaving = await Savings.findByIdAndUpdate(id, saving, { new: true });
        return updatedSaving;
    } catch (error) {
        throw new Error('Error updating saving: ' );
    }
}

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const getTotalSaving = async (filter: 'year' | 'week') => {
    try {
        const matchStage: any = {};
        if (filter === 'year') {
            matchStage['startDate'] = {
                $gte: new Date(new Date().getFullYear(), 0, 1),
                $lte: new Date(new Date().getFullYear(), 11, 31)
            };
        } else if (filter === 'week') {
            const currentDate = new Date();
            const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();
            const lastDayOfWeek = firstDayOfWeek + 6;
            matchStage['startDate'] = {
                $gte: new Date(new Date().setDate(firstDayOfWeek)),
                $lte: new Date(new Date().setDate(lastDayOfWeek))
            };
        } else {
            throw new Error('Invalid filter');
        }

        const savings = await Savings.aggregate([
            { $match: matchStage },
            {
                $group: {
                    _id: filter === 'year' ? { $month: "$startDate" } : { $dayOfWeek: "$startDate" },
                    totalAmount: { $sum: "$currentAmount" }
                }
            },
            {
                $project: {
                    _id: 0,
                    period: {
                        $cond: {
                            if: { $eq: [filter, 'year'] },
                            then: { $arrayElemAt: [monthNames, { $subtract: ["$_id", 1] }] },
                            else: {
                                $switch: {
                                    branches: [
                                        { case: { $eq: ["$_id", 1] }, then: "Sunday" },
                                        { case: { $eq: ["$_id", 2] }, then: "Monday" },
                                        { case: { $eq: ["$_id", 3] }, then: "Tuesday" },
                                        { case: { $eq: ["$_id", 4] }, then: "Wednesday" },
                                        { case: { $eq: ["$_id", 5] }, then: "Thursday" },
                                        { case: { $eq: ["$_id", 6] }, then: "Friday" },
                                        { case: { $eq: ["$_id", 7] }, then: "Saturday" }
                                    ],
                                    default: "Unknown"
                                }
                            }
                        }
                    },
                    totalAmount: 1
                }
            }
        ]);

        return savings;
    } catch (error) {
        throw new Error('Error calculating total savings');
    }
};

export default Savings;
