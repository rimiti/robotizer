import * as _ from "lodash";
import Utils from "./utils";

export default class Parser {
  private content: {
    rules?: [{
      user_agent?: string,
      disallow?: string,
      allow?: string,
    }],
    sitemaps?: [string],
  } = {};

  constructor(content?: string) {
    if (content) {
      this.parse(content);
    }
  }

  /**
   * @description Parse existing and retrieving file.
   */
  public parse(content: string) {
    const tmp = content.split("\n");
    let userAgent = "";
    tmp.forEach((row) => {
      if (Utils.isUserAgent(row)) {
        userAgent = Utils.last(row);
      } else if (Utils.isDisallow(row)) {
        this.addDisallow(userAgent, Utils.last(row));
      } else if (Utils.isAllow(row)) {
        this.addAllow(userAgent, Utils.last(row));
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
   * @description Allow path for bot.
   * @param {string} bot
   * @param {string} path
   */
  public addAllow(bot: string, path: string): void {
    const item = { allow: path, user_agent: bot };
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
   * @returns {{ua: "../index".Dictionary<{user_agent?: string; disallow?: string}[]>; sitemaps: [string] | undefined}}
   */
  public getObject() {
    const sorted = _.sortBy(this.content.rules, ["allow", "disallow"]);
    const ua = _.groupBy(sorted, "user_agent");
    return {
      ua,
      sitemaps: this.content.sitemaps
    };
  }

  /**
   * @description Returns plain text.
   * @returns {string}
   */
  public getContent() {
    let output: string = "";
    _.forIn(this.getObject().ua, (rules, userAgent) => {
      output += `User-Agent: ${userAgent}\n`;
      _.mapValues(rules, (paths) => {
        if (Object.prototype.hasOwnProperty.call(paths, "disallow")) {
          output += `Disallow: ${paths.disallow}\n`;
        } else if (Object.prototype.hasOwnProperty.call(paths, "allow")) {
          output += `Allow: ${paths.allow}\n`;
        }
      });
    });

    _.forEach(this.getObject().sitemaps, (url) => {
      output += `Sitemap: ${url}\n`;
    });
    return output;
  }
}
