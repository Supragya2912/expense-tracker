import {  createUser, getUserByEmail, getUserById } from "../models/User/User";
import { IUserDocument } from "../models/User/User.d";
import { Request, Response } from "express";
import { IUser } from "../models/User/User.d";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

interface RequestExtended extends Request {
  user?: IUserDocument;
}

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY!, {
      expiresIn: "24h",
    });

    res.json({
      message: "Login successful",
      data: {
        accessToken: token,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: IUser = {
    email,
    password: hashedPassword,
    firstName,
    lastName,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const user = await createUser(newUser);
    const { password, ...userWithoutPassword } = user.toObject();
    return res.status(201).json({
      message: "User Created Successfully",
      data: {
        user: userWithoutPassword,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const getMyProfile = async (req: RequestExtended, res: Response) => {
  try {
    const user = await getUserById(req.user?._id as string);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const { password, ...userWithoutPassword } = user.toObject();

    res.status(200).json({
      success: true,
      data: userWithoutPassword,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};
