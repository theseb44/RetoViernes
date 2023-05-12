import mongoose, { model } from "mongoose";
import type { Medicine } from "../interfaces/medicine";

const medicineSchema = new mongoose.Schema<Medicine>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    qty: { type: Number, required: true },
    provider: { type: String, required: true },
    doctorSignature: { type: String, required: true },
    createdAt: { type: String }
});

const medicinesSchema = model<Medicine>("medicines", medicineSchema);
export default medicinesSchema;