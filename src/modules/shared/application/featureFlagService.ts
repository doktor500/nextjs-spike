export enum FeatureFlag {
  DURATION = "duration-feature-flag",
}

export interface FeatureFlagService {
  getFeatureFlag(key: FeatureFlag): Promise<boolean | void>;
}
