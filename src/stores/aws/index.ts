import IStore from "../istore";

export class Aws implements IStore {
  /**
   * @description Authentication.
   * @returns {Promise<boolean>}
   */
  login(credentials): Promise<boolean> {
    // TODO: Implement logic here
  }

  /**
   * @description Retrieve file.
   * @returns {Promise<{}>}
   */
  getFile(): Promise<{}> {
    // TODO: Implement logic here
  }

  /**
   * @description Save file on store.
   * @returns {Promise<boolean>}
   */
  save(): Promise<boolean> {
    // TODO: Implement logic here
  }
}
