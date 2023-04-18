import { CustomerInterface } from "../interfaces";
import { Customer } from "../models/customer.model";

class CustomerRepository {
  create(customers: CustomerInterface[]) {
    return Customer.create(customers);
  }
  update(id: number, customer: Partial<CustomerInterface>) {
    return Customer.updateOne({ id, $set: customer });
  }
}

export default new CustomerRepository();
