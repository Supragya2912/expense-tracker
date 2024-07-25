import express from 'express';
import {addUser, loginUser} from '../controllers/userContoller';

const router = express.Router();

router.post('/create-user', addUser);
router.post('/login', loginUser);


export default router;