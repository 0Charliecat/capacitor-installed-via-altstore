import { registerPlugin } from '@capacitor/core';

import type { CapacitorReadNativeSettingPlugin } from './definitions';

const CapacitorReadNativeSetting = registerPlugin<CapacitorReadNativeSettingPlugin>('CapacitorReadNativeSetting', {
    web: () => import('./web').then(m => new m.CapacitorReadNativeSettingWeb()),
});

export * from './definitions';
export { CapacitorReadNativeSetting };