import express from 'express';
import {addUser, getMyProfile, loginUser} from '../controllers/userContoller';
import { addBudget, updateBudget, getBudgetByUserId } from '../models/Budget/Budget';
import { addGoal, addAmount, getSaving , getTotalSavingHandler} from '../controllers/savingController';
import { getSavingById , updateSaving} from '../models/Savings/Savings';
import { addTransaction, getTransactionById, getTransactionsByUserId } from '../models/Transactions/Transaction';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/create-user', addUser);
router.post('/login', loginUser);
router.post('/get-profile',auth, getMyProfile);

router.post('/add-budget',auth, addBudget);
router.post('/update-budget', auth, async (req, res) => {
  const { userId, budget } = req.body;
    const updatedBudget = await updateBudget(userId, budget);
    res.json(updatedBudget);
});
router.post('/get-budget',auth, getBudgetByUserId);

router.post('/add-goal',auth, addGoal);
router.post('/add-amount',auth, addAmount);
router.post('/get-saving',auth, getSaving);
router.post('/get-total-saving', auth, getTotalSavingHandler);
router.post('/get-saving-by-id',auth, getSavingById);
router.post('/update-saving',auth, async (req, res) => {
    const { id, saving } = req.body;
    const updatedSaving = await updateSaving(id, saving);
    res.json(updatedSaving);
});

router.post('/add-transaction',auth, addTransaction);
router.post('/get-transaction',auth, getTransactionsByUserId);
router.post('/get-transaction-by-id',auth, getTransactionById);

export default router;