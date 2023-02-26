export interface CapacitorReadNativeSettingPlugin {
  read(args: { 
    key: string 
  }): Promise<any>;
}
