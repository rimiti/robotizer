import * as _ from "lodash";
import Utils from "./utils";

export default class Parser {
  private content: {
    rules?: [{
      user_agent?: string,
      disallow?: string,
    }],
    sitemaps?: [string],
  } = {};

  /**
   * @description Parse existing and retrieving file.
   */
  public parse(content: string) {
    const tmp = content.split("\n");
    let userAgent = "";
    tmp.forEach((row, index) => {
      if (Utils.isUserAgent(row)) {
        userAgent = Utils.last(row);
      } else if (Utils.isDisallow(row)) {
        this.addDisallow(userAgent, Utils.last(row));
      } else if (Utils.isSitemap(row)) {
        this.addSitemap(Utils.last(row));
      }
    });
    return this;
  }

  /**
   * @description Disallow path for bot.
   * @param {string} bot
   * @param {string} path
   */
  public addDisallow(bot: string, path: string): void {
    const item = { disallow: path, user_agent: bot };
    if (Array.isArray(this.content.rules)) {
      this.content.rules.push(item);
    } else {
      this.content.rules = [item];
    }
  }

  /**
   * @description Add sitemap url.
   * @param {string} url
   */
  public addSitemap(url: string): void {
    if (Array.isArray(this.content.sitemaps)) {
      this.content.sitemaps.push(url);
    } else {
      this.content.sitemaps = [url];
    }
  }

  /**
   * @description Get formatted content.
   * @returns {{user_agents: "../index".Dictionary<{user_agent?: string; disallow?: string}[]>; sitemaps: [string] | undefined}}
   */
  public getObject() {
    return {
      user_agents: _.groupBy(this.content.rules, "user_agent"),
      sitemaps: this.content.sitemaps
    };
  }

  /**
   * @description Returns plain text.
   * @returns {string}
   */
  public getContent() {
    let output: string = "";
    _.forIn(this.getObject().user_agents, (rules, userAgent) => {
      output += `User-Agent: ${userAgent}\n`;
      _.mapValues(rules, (paths) => {
        output += `Disallow: ${paths.disallow}\n`;
      });
    });
    return output;
  }
}
