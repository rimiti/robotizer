export default interface IStore {
  /**
   * @description Authentication.
   * @param {{}} credentials
   * @returns {Promise<boolean>}
   */
  login(credentials?: {}): Promise<boolean>;

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
