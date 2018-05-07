export default class Utils {

  /**
   * @description Check if is user agent.
   * @param {string} data
   * @returns {boolean}
   */
  public static isUserAgent(data: string): boolean {
    return /^User-agent:/i.test(data);
  }

  /**
   * @description Check if is disallow.
   * @param {string} data
   * @returns {boolean}
   */
  public static isDisallow(data: string): boolean {
    return /^Disallow:/i.test(data);
  }

  /**
   * @description Check if is sitemap.
   * @param {string} data
   * @returns {boolean}
   */
  public static isSitemap(data: string): boolean {
    return /^Sitemap:/i.test(data);
  }
}
