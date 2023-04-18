import mongoose, { Schema } from "mongoose";
import { CustomerInterface } from "../interfaces";

export const customerSchema = new Schema<CustomerInterface>({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  plan: [{ id: Number, name: String, value: String }],
  phones: [{ id: Number, number: Number }],
});

export const Customer = mongoose.model<CustomerInterface>(
  "Customer",
  customerSchema
);
