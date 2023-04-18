import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_TOKEN = process.env.BEESWEB_API_TOKEN || "";
const API_BASE_URL = "https://api.beesweb.com.br";

class BesswebApi {
  private axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  public async get<T>(url: string) {
    const response = await this.axiosInstance.get<T>(url);
    return response;
  }

  public async post<T>(url: string, data: any) {
    const response = await this.axiosInstance.post<T>(url, data);
    return response;
  }
}

export default new BesswebApi();
