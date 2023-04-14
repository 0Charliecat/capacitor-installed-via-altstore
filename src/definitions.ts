export interface IsAnAltStoreInstallPlugin {
  isAltStoreInstallation(): Promise<{ isAltStored: boolean; }>;
}
