export default interface IStore {
  /**
   * @description Authentication.
   * @param {{}} credentials
   * @returns {Promise<boolean>}
   */
  login(credentials?: {}): Promise<boolean>;

  /**
   * @description Save file on store.
   * @returns {Promise<boolean>}
   */
  save(content: string, options?: object): Promise<void>;
}
