import { Request, Response } from "npm:express";
import { userModel } from "../models/model.ts";

const data = [];

export const getAll = async(_req: Request, res: Response) => {
    try {
        const allUsers = await userModel.find();
        res.json(allUsers);
    }catch(err) {
        console.log(String(err));
    }
   }

export const create = async(req: Request, res: Response) => {
    try {
        console.log(req.body)
        await userModel.create(req.body);
        res.json({
            status: true,
            message: 'User created successfully',
        })
    }catch(err) {
        console.log(String(err));
    }
}

export const update = async(req: Request, res: Response) => {
    try {
        const userUpdate = await userModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json({
            status: true,
            message: 'User successfully updated'
        })
    }catch(err) {
        console.log(String(err));
    }
}

export const deleteOne = async(req: Request, res: Response) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.json({
            status: true,
            message: 'User successfully deleted'
        })
    }catch(err) {
        console.log(String(err));
    }
}