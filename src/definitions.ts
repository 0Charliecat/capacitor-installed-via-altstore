declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorReadNativeSetting: CapacitorReadNativeSettingPlugin;
  }
}

export interface CapacitorReadNativeSettingPlugin {
  read(options: { key: string }): Promise<{ key: string }>;
}
