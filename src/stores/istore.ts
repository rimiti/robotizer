export default interface IStore {
  /**
   * @description Authentication.
   * @param {{}} credentials
   * @returns {Promise<void>}
   */
  login(credentials?: {}): Promise<void>;

  /**
   * @description Save file on store.
   * @returns {Promise<void>}
   */
  save(content: string, options?: object): Promise<void>;
}
