import Axios from "axios";
import * as fs from "fs";
import Utils from "./utils";

export default class Parser {
  private content: {
    user_agent?: [{
      name?: string,
      disallow?: [string],
    }],
    sitemap?: [string],
  } = {
    // user_agent: {}
  };

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
      "Sitemap: https://www.clicrdv.com/fr/sitemap_index1.xml\n" +
      "Sitemap: https://www.clicrdv.com/fr/sitemap_index2.xml";
  }

  /**
   * @description Parse existing and retrieving file.
   */
  parse(content = this.getContent()) {
    const tmp = content.split("\n");
    let userAgentTmp = "";
    tmp.forEach((row, index) => {
      if (Utils.isUserAgent(row)) {
        userAgentTmp = row;

        // if (Array.isArray(this.content.sitemap) && this.content.user_agent) {
        //   this.content.user_agent[Utils.last(row)].push().name =
        // } else {
        //
        // }
      } else if (Utils.isSitemap(row)) {
        if (Array.isArray(this.content.sitemap)) {
          this.content.sitemap.push(Utils.last(row));
        } else {
          this.content.sitemap = [Utils.last(row)];
        }
      }
    });
    console.log(JSON.stringify(this.content));
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
