import jwt from 'express-jwt';
import User from '../models/user.model';

export const signUp = (req: any, res: any) => {
    const data = req.body;
    const user = new User(data);
    user.save()
    res.status(200).json(user);
};
export const signIn = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}).exec((err, user) => {
        if(err) return res.status(400).json('User not registered');
        if(user.password !== password)return res.status(400).json('Incorrect login credentials');
        const token = jwt.sign(email)
    })

};
export const resetPassword = (req, res) => {};
export const forgotPassword = (req, res) => {};