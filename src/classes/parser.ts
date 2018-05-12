import Axios from "axios";
import * as fs from "fs";
import Utils from "./utils";

export default class Parser {
  private content: {
    user_agent: {
      name?: string,
      disallow?: [string],
    },
  } = {
    user_agent: {},
  };

  constructor() {

  }

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
      "Disallow: /map/\n" +
      "Disallow: /404\n" +
      "Disallow: /422\n" +
      "Disallow: /500\n" +
      "Disallow: /api/\n" +
      "Disallow: /images/site3/logos-clients/\n" +
      "Sitemap: https://www.clicrdv.com/fr/sitemap_index.xml";
  }

  /**
   * @description Parse existing and retrieving file.
   */
  parse(content = this.getContent()) {
    const tmp = content.split("\n");
    tmp.forEach((row, index) => {

      if (Utils.isUserAgent(row)) {
        this.content.user_agent.name = Utils.first(row);
      } else if (Utils.isDisallow(row)) {

      } else if (Utils.isSitemap(row)) {
        this.content.sitemap.name = Utils.first(row);

      } else {
        // throw new Error(`Unknown row type ${row}`);
      }
    });
    console.log(this.content);

  }

  /**
   * @description Allow path for bot.
   * @param {string} bot
   * @param {string} path
   */
  allow(bot: string, path: string) {

  }

  /**
   * @description Disallow path for bot.
   * @param {string} bot
   * @param {string} path
   */
  disallow(bot: string, path: string) {

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
