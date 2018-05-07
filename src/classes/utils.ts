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

  /**
   * @description Returns first row item.
   * @param {string} data
   * @returns {string}
   */
  public static first(data: string): string {
    return Utils.explode(data)[0];
  }

  /**
   * @description Returns last row item.
   * @param {string} data
   * @returns {string}
   */
  public static last(data: string): string {
    const tmp = Utils.explode(data)[1];
    return (tmp.charAt(0) === " ") ? tmp.slice(1, tmp.length) : tmp;
  }

  /**
   * @description Explode data in two items.
   * @param {string} data
   * @returns {string[]}
   */
  public static explode(data: string): string[] {
    const tmp = data.split(/:(.+)/).slice(0, 2);
    if (!/^(Sitemap|Disallow|User-agent)$/i.test(tmp[0])) {
      throw new Error(`Error during explode, ':' missing after key: ${tmp[0]}`);
    }
    return tmp;
  }
}
