import type { Request, Response } from "express"
import Medicines from "../models/medicineSchema"


const getAllMedicine = async (req: Request, res: Response) => {
  try {
    const medicines = await Medicines.find({});
    res.status(200).json({ medicines })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error al obtener todos" })
  }
}

const createMedicine = async (req: Request, res: Response) => {

  try {
    const medicine = await Medicines.create(req.body);
    res.status(200).json({
      msg: "Se creo exitosamente"
    })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

const getMedicine = async (req: Request, res: Response) => {

  try {
    const { id: medId } = req.params
    const medicine = await Medicines.findOne({ _id: medId });
    res.status(200).json({ medicine })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error  " })
  }
}

const updateMedicine = async (req: Request, res: Response) => {

  try {
    const { id: medId } = req.params
    const medicine = await Medicines.findOneAndUpdate({ _id: medId }, req.body, {
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

const deleteMedicine = async (req: Request, res: Response) => {

  try {
    const { id: medId } = req.params
    const medicine = await Medicines.findOneAndDelete({ _id: medId });
    res.status(200).json({
      msg: "Se creo exitosamente"
    })
  } catch (error) {
    res.status(500).json({ msg: "ocurrio un error " })
  }
}

export {
    getAllMedicine,
    getMedicine,
    createMedicine,
    updateMedicine,
    deleteMedicine,
};