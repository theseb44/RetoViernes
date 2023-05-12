import type { Request, Response } from "express"
import MedicalOrder from "../models/MedicalOrderSchema"


const getAllOrders = async (req: Request, res: Response) => {
  try {
    const medOrders = await MedicalOrder.find({});
    res.status(200).json({ medOrders })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error al obtener todos" })
  }
}

const createOrder = async (req: Request, res: Response) => {

  try {
    const medOrders = await MedicalOrder.create(req.body);
    res.status(200).json({
      msg: "Se creo exitosamente"
    })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

const getOrder = async (req: Request, res: Response) => {

  try {
    const { id: medOId } = req.params
    const medOrders = await MedicalOrder.findOne({ _id: medOId });
    res.status(200).json({ medOrders })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

const updateOrder = async (req: Request, res: Response) => {

  try {
    const { id: medOId } = req.params
    const medOrders = await MedicalOrder.findOneAndUpdate({ _id: medOId }, req.body, {
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

const deleteOrder = async (req: Request, res: Response) => {

  try {
    const { id: medOId } = req.params
    const medOrders = await MedicalOrder.findOneAndDelete({ _id: medOId });
    res.status(200).json({
      msg: "Se creo exitosamente"
    })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

export {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
