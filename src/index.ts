import { registerPlugin } from '@capacitor/core';

import type { IsAnAltStoreInstallPlugin } from './definitions';

const IsAnAltStoreInstall = registerPlugin<IsAnAltStoreInstallPlugin>(
  'IsAnAltStoreInstall',
  {
    web: () => import('./web').then(m => new m.IsAnAltStoreInstallWeb()),
  },
);

export * from './definitions';
export { IsAnAltStoreInstall };
