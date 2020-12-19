import { WebPlugin } from '@capacitor/core';
import { CapacitorReadNativeSettingPlugin } from './definitions';

export class CapacitorReadNativeSettingWeb extends WebPlugin implements CapacitorReadNativeSettingPlugin {
  constructor() {
    super({
      name: 'CapacitorReadNativeSetting',
      platforms: ['web'],
    });
  }

  async read(options: { key: string }): Promise<{ key: string }> {
    console.log('VAL', options);
    return options;
  }
}

const CapacitorReadNativeSetting = new CapacitorReadNativeSettingWeb();

export { CapacitorReadNativeSetting };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorReadNativeSetting);
