import customerRepostory from "../repositories/customer.repostory";
import beeswebApi from "../apis/beesweb.api";
import { CustomerInterface, CustomerReportInterface } from "../interfaces";
type propsCustomers = {
  id: number;
  name: string;
  contract: {
    authentications: [
      { id: number; plan: { id: number; name: string; value: string } }
    ];
  };
  phones: [{ id: number; number: string }];
};

class CustomerService {
  async getBlockedCustomersReport() {
    let reportCustomers = new Array<{ id: number; name: string }>();

    try {
      const response = await beeswebApi.get<any>(
        "/adm/contracts?message_payment=3"
      );
      reportCustomers = response.data.data.map(
        (item: CustomerReportInterface) => {
          return item.customer;
        }
      );

      let customers: CustomerInterface[] = await Promise.all(
        reportCustomers.map(async (item: { id: number; name: string }) => {
          const response = await beeswebApi.get<propsCustomers>(
            `/adm/customers/${item.id}`
          );
          const customer: CustomerInterface = {
            id: response.data.id,
            name: response.data.name,
            plan: response.data.contract.authentications[0].plan,
            phones: response.data.phones,
          };
          return customer;
        })
      );

      return customerRepostory.create(customers);
    } catch (error) {
      return error;
    }
  }

  async uptadeCustomer(id: number, customer: Partial<CustomerInterface>) {
    return customerRepostory.update(id, customer);
  }
}

export default new CustomerService();
