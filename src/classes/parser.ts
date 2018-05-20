import Axios from "axios";
import * as fs from "fs";
import Utils from "./utils";

export default class Parser {
  private content: {
    rules?: [{
      user_agent?: string,
      disallow?: string,
    }],
    sitemaps?: [string],
  } = {};

  async getFile(url: string) {
    const file = fs.createWriteStream("/tmp/robots.txt");
    const response = await Axios.get(url)
      .catch((e) => {
        throw new Error(`Error during retrieving file process: ${e}`);
      });
  }

  getContent(): string {
    return "User-Agent: *\n" +
      "Disallow: /map/\n" +
      "Disallow: /404\n" +
      "Disallow: /422\n" +
      "Disallow: /500\n" +
      "Disallow: /api/\n" +
      "Disallow: /images/site3/logos-clients/\n" +
      "User-Agent: google-bot\n" +
      "Disallow: /toto/\n" +
      "Disallow: /404-toto\n" +
      "Disallow: /422-toto\n" +
      "Disallow: /500-toto\n" +
      "Disallow: /api-toto/\n" +
      "Disallow: /images-toto/site3/logos-clients/\n" +
      "Sitemap: https://www.clicrdv.com/fr/sitemap_index1.xml\n" +
      "Sitemap: https://www.clicrdv.com/fr/sitemap_index2.xml";
  }

  /**
   * @description Parse existing and retrieving file.
   */
  parse(content = this.getContent()) {
    const tmp = content.split("\n");
    let userAgent = "";
    tmp.forEach((row, index) => {
      if (Utils.isUserAgent(row)) {
        userAgent = Utils.last(row);
      } else if (Utils.isDisallow(row)) {
        this.addDisallow(userAgent, Utils.last(row));
      } else if (Utils.isSitemap(row)) {
        if (Array.isArray(this.content.sitemaps)) {
          this.content.sitemaps.push(Utils.last(row));
        } else {
          this.content.sitemaps = [Utils.last(row)];
        }
      }
    });
    console.log(this.content);
  }

  /**
   * @description Disallow path for bot.
   * @param {string} bot
   * @param {string} path
   */
  addDisallow(bot: string, path: string): void {
    const item = { disallow: path, user_agent: bot };
    if (Array.isArray(this.content.rules)) {
      this.content.rules.push(item);
    } else {
      this.content.rules = [item];
    }
  }

  /**
   * @description Get formated content.
   */
  getFormatedContent() {

  }

  /**
   * @description Get object content.
   */
  getObjectContent() {

  }

  /**
   * @description Save content into specified store.
   * @param {string} store
   */
  saveContent(store: string) {

  }
}
