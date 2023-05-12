import type { Medicine } from './medicine'

export interface MedicalOrder extends Document {
  name: string
  lastName: string
  idNumber: string
  eps: string
  medicines: Medicine[]
  comments: string
  doctorSignature: string
  createdAt?: string
}