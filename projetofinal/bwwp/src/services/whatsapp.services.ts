import puppeteer, { Browser, Page } from "puppeteer";
import { whatsAppMetaData } from "../models/whatsApp.model";

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

  public async sendMessage(message: string, recipient: string) {
    const msgUrl =
      whatsAppMetaData.whatsAppURL +
      "send?phone=" +
      recipient +
      "&text=" +
      message;
    await this.page.goto(msgUrl);
    await this.page.waitForSelector(whatsAppMetaData.sendMessageButton, {
      visible: true,
    });
    await this.sleep(1000);
    await this.page.click(whatsAppMetaData.sendMessageButton);
  }
}

export default new whatsAppServices();