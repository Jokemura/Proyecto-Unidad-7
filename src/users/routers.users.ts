import { Request, Response } from "express";
import express from "express";
import { body, validationResult } from "express-validator";
import * as _userService from './service';
export const userRouter = express.Router();

//  Lista de usuarios
userRouter.get('/', async (request: Request, response: Response) => {
    try {
        const users = await _userService.listUsers();
        return response.status(200).json(users);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});


userRouter.get('/:id', async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
        const user = await _userService.getUser(id);
        if (user) {
            return response.status(200).json(user);
        }
        return response.status(404).json('User could not be found');
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});