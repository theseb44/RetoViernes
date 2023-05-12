import mongoose, { model, Schema } from "mongoose";
import type { MedicalOrder } from "../interfaces/medicalOrder";
import  Medicine  from "../models/medicineSchema"; 

const MedicalOrderSchema = new mongoose.Schema<MedicalOrder>({


    name: {
        required: true,
        type: String,
    },
    lastName: {
        type: String,
    },
    idNumber: {
        type: String,
    },
    eps: {
        type: String,
    },
    medicines: [
        {
          type: Schema.Types.ObjectId,
          ref: "medicines"
        },
      ],
    comments: {
        type: String,
    },
    doctorSignature: {
        type: String,
    },
    createdAt: {
        type: String,
    },

})

const MedicalOrderModel = model<MedicalOrder>("medicalOrders", MedicalOrderSchema);
export default MedicalOrderModel;