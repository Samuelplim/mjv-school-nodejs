import mongoose, { Schema } from "mongoose";

export const customerSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  birth: {
    type: String,
  },
  kind_person: {
    type: String,
  },
  rg_state_registration: {
    type: String,
  },
  cpf_cnpj: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

export const Customer = mongoose.model("Customer", customerSchema);
