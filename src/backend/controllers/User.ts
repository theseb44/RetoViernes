import userModel from "../models/userModel";
import type { Request, Response } from "express"



const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find({});
    res.status(200).json({ users })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error al obtener todos" })
  }
}

const createUser = async (req: Request, res: Response) => {

  try {
    const users = await userModel.create(req.body);
    res.status(200).json({
      msg: "Se creo exitosamente"
    })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

const getUser = async (req: Request, res: Response) => {

  try {
    const { id: usersId } = req.params
    const users = await userModel.findOne({ _id: usersId });
    res.status(200).json({ users })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

const updateUser = async (req: Request, res: Response) => {

  try {
    const { id: usersId } = req.params
    const users = await userModel.findOneAndUpdate({ _id: usersId }, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      msg: "Se creo exitosamente"
    })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

const deleteUser = async (req: Request, res: Response) => {

  try {
    const { id: usersId } = req.params
    const users = await userModel.findOneAndDelete({ _id: usersId });
    res.status(200).json({
      msg: "Se creo exitosamente"
    })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}


export {

  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};