import { FeatureFlag, FeatureFlagService } from "@/src/modules/shared/application/featureFlagService";

export default class DefaultFeatureFlagService implements FeatureFlagService {
  async getFeatureFlag(key: FeatureFlag): Promise<boolean | void> {
    return true;
  }
}
