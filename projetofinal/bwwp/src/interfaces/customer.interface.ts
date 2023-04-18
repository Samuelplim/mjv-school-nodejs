export interface CustomerInterface {
  id: number;
  name: string;
  status: number;
  plan: { id: number; name: string; value: string };
  phones: [{ id: number; number: string }];
}
export interface CustomerReportInterface {
  id: number;
  customer: {
    id: number;
    name: string;
  };
}
