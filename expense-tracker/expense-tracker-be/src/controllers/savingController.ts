import { ISavingGoal } from "../models/Savings/Savings.d";
import { getUserById } from "../models/User/User";
import { IUser } from "../models/User/User.d";
import { addSaving } from "../models/Savings/Savings";
import { Request, Response } from "express";
import moment from "moment-timezone";
import { IUserDocument } from "../models/User/User.d";
import {
  addAmountToSaving,
  getSavingsByUserId,
  getTotalSaving,
} from "../models/Savings/Savings";

interface RequestExtended extends Request {
  user?: IUserDocument;
}

export const addGoal = async (req: RequestExtended, res: Response) => {
  try {
    const userId = req.user?._id as string;
    const user: IUser | null = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const {
      targetAmount,
      monthly,
      startDate,
      endDate,
      title,
      currentAmount = 0,
    } = req.body;

    if (
      monthly === undefined ||
      targetAmount === undefined ||
      startDate === undefined ||
      endDate === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!monthly && !title) {
      return res
        .status(400)
        .json({ message: "Title is required for non-monthly savings" });
    }

    const parsedStartDate = moment.tz(startDate, "DD-MM-YYYY", "UTC").toDate();
    const parsedEndDate = moment.tz(endDate, "DD-MM-YYYY", "UTC").toDate();

    const existingSavings = await getSavingsByUserId(userId);
    const duplicateSaving = existingSavings.find(
      (saving) =>
        saving.startDate.getTime() === parsedStartDate.getTime() &&
        saving.endDate.getTime() === parsedEndDate.getTime()
    );

    if (duplicateSaving) {
      return res
        .status(400)
        .json({ message: "Saving already exists for the given date" });
    }

    const savingGoal: ISavingGoal = {
      userId,
      title: monthly ? "" : title,
      targetAmount,
      monthly,
      currentAmount,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newSaving = await addSaving(savingGoal);

    return res.status(201).json({
      message: "Saving goal created successfully",
      data: newSaving,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating saving goal" });
  }
};

export const addAmount = async (req: RequestExtended, res: Response) => {
  try {
    const { id, amount } = req.body;
    const saving = await addAmountToSaving(id, amount);
    return res.status(200).json({
      message: "Saving goal created successfully",
      data: saving,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error adding amount to saving goal" });
  }
};
export const getSaving = async (req: RequestExtended, res: Response) => {
    try {
      const userId = req.user?._id as string;
      const savings = await getSavingsByUserId(userId);

      const emptyTitleSaving = savings.find((saving: any) => !saving.title);
      const otherSavings = savings.filter((saving: any) => saving.title);
  
      const response = emptyTitleSaving
        ? [emptyTitleSaving, { saving: otherSavings }]
        : [{ saving: otherSavings }];
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching saving goals" });
    }
  };
  

export const getTotalSavingHandler = async (req: Request, res: Response) => {
  try {
    const filter = req.body.filter as "year" | "week";
    if (!filter) {
      return res.status(400).json({ message: "Filter is required" });
    }

    const totalSavings = await getTotalSaving(filter);

    return res.status(200).json(totalSavings);
  } catch (error) {
    return res.status(500).json({ message: "Error calculating total savings" });
  }
};
