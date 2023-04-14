import { WebPlugin } from '@capacitor/core';

import type { IsAnAltStoreInstallPlugin } from './definitions';

export class IsAnAltStoreInstallWeb
  extends WebPlugin
  implements IsAnAltStoreInstallPlugin
{
  async isAltStoreInstallation(): Promise<{ isAltStored: boolean; }> {
    return { isAltStored: false };
  }
}


const IsAnAltStoreInstall = new IsAnAltStoreInstallWeb();

export { IsAnAltStoreInstall };