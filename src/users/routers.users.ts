import { Request, Response } from "express";
import express from "express";
import { body, validationResult } from "express-validator";
import * as _userService from './service';
export const userRouter = express.Router();

// Get: Lista de usuarios
userRouter.get('/', async (request: Request, response: Response) => {
    try {
        const users = await _userService.Userslist();
        return response.status(200).json(users);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});