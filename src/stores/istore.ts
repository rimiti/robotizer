export default interface IStore {
  /**
   * @description Authentication.
   * @returns {Promise<boolean>}
   */
  login(configuration: {}): Promise<boolean>;

  /**
   * @description Retrieve file.
   * @returns {Promise<{}>}
   */
  getFile(): Promise<{}>;

  /**
   * @description Save file on store.
   * @returns {Promise<boolean>}
   */
  save(): Promise<boolean>;
}
