import express from 'express';
import {addUser, getMyProfile, loginUser} from '../controllers/userContoller';
import auth from '../middleware/auth';


const router = express.Router();

router.post('/create-user', addUser);
router.post('/login', loginUser);
router.post('/get-profile',auth, getMyProfile);


export default router;