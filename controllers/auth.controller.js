import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const session = await mongoose.startSession();

export const signup = async (req, res, next) => {
  try {
    session.startTransaction();
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email }).session(session);
   if (existingUser) {
      const error = new Error("User already exists");
      error.status = 400;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 11);
    const newUser = await User.create([{username, email, password: hashedPassword }], { session });
    const token = jwt.sign({ id: newUser[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN ,algorithm: "HS256"});
    session.commitTransaction();
    session.endSession();
    res.status(201).json({ message: "User signed up successfully!", token });

  } catch (error) {
    error.status = 500;
    session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signin = async (req, res, next) => {
  session.startTransaction();
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).session(session);
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      throw error;
    }
    if (!isMatch) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      throw error;
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN ,algorithm: "HS256"});
    session.commitTransaction();
    session.endSession();
    res.status(200).json({ message: "User signed in successfully!", token });
  } catch (error) {
    session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signout = async (req, res, next) => {};
