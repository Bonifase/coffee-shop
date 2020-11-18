import express from 'express';
import { forgotPassword, resetPassword, signIn, signUp } from '../controllers/auth';

const router = express.Router();

router.post('/login', signIn);
router.post('/sign-up', signUp);

router.put('/reset-password', resetPassword);
router.put('/forgot-password', forgotPassword);