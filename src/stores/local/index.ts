import * as fs from "fs";
import IStore from "../istore";

export class Local implements IStore {
  /**
   * @description Authentication.
   * @returns {Promise<void>}
   */
  public login(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * @description Save file to local file.
   * @returns {Promise<void>}
   */
  public save(content: string, options: object): Promise<void> {
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(options.path);
      file.once("open", () => {
        file.write(content);
        file.end();
        resolve();
      });

      file.once("error", (e: Error) => {
        reject(new Error(`Error during saving file: ${e}`));
      });
    });
  }
}
