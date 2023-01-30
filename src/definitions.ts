export interface CapacitorReadNativeSettingPlugin {
  read(options: { key: string }): Promise<{ key: string }>;
}
