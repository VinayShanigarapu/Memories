import bcrypt from 'bcryptjs'; // bcrypt is used to hash the password It is used for security when hacked
import jwt from 'jsonwebtoken'; // It is used to store the user in browser for some period of time
import user from '../models/user.js';

import User from '../models/user.js';

export const signin = async(req,res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser) 
        return res.status(404).json({message: "User doesn't exists.."});
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Username or Password.."});
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1 hour"}); // test is the screat
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong.."});
    }
}

export const signup = async(req,res) => {
    const { email, password, confirmPassword, firstName, lastName} = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(404).json({message: "User already exists.."});
        if(password !== confirmPassword) return res.status(404).json({message: "Password are not matching.."});
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}` }); // `$` is a templete to combine two things
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1 hour"});
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong.."});
    }
}