import puppeteer, { Browser, Page } from "puppeteer";
import { whatsAppMetaData } from "../models/whatsApp.model";
import customerRepostory from "../repositories/customer.repostory";

class whatsAppServices {
  public browser = new Browser();
  public page = new Page();

  constructor() {}

  public async online() {
    this.browser = await puppeteer.launch({
      headless: false,
      userDataDir: "dist/myData",
    });
    this.page = await this.browser.newPage();
    this.page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.5563.147 Safari/537.36"
    );
    this.page.goto(whatsAppMetaData.whatsAppURL);
  }

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public async sendMessage(customerID: number) {
    const customer = await customerRepostory.getByID(customerID);
    const customerPhone = customer?.phones[0].number;
    const customerPlanValue = customer?.plan.value;
    const text = `Olá ${customer?.name}, seu plano no valor de R$ ${customerPlanValue} vence hoje!`;
    const msgUrl = encodeURI(
      whatsAppMetaData.whatsAppURL +
        "send?phone=" +
        customerPhone +
        "&text=" +
        text
    );
    await this.page.goto(msgUrl);
    await this.page.waitForSelector(whatsAppMetaData.sendMessageButton, {
      visible: true,
    });
    await this.sleep(1000);
    await this.page.click(whatsAppMetaData.sendMessageButton);
  }
}

export default new whatsAppServices();
