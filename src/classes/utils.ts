export default class Utils {

  public static isUserAgent(data: string): boolean {
    return /^User-agent$/i.test(data);
  }
}
