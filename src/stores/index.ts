import IStore from './istore';
import Aws from './aws'

export default class Store implements IStore {
  public store: IStore;

  /**
   * @description Needs store name.
   * @param {string} store
   */
  constructor(store: string) {
    if (store === 'aws') {
      this.store = new Aws();
    }
    throw new Error(`Store "${store}" unknown.`)
  }

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
