import LaunchDarkly from "launchdarkly-node-server-sdk";
import { config } from "@/src/modules/shared/infrastructure/config";
import { FeatureFlag, FeatureFlagService } from "@/src/modules/shared/application/featureFlagService";

type ResolvedPromiseHandler = (value: PromiseLike<boolean> | boolean) => void;
type RejectedPromiseHandler = (error: Error) => void;

export default class DefaultFeatureFlagService implements FeatureFlagService {
  private readonly client = LaunchDarkly.init(config.LAUNCH_DARKLY_SDK_KEY);

  getFeatureFlag(key: FeatureFlag): Promise<boolean> {
    const context = { kind: "user", key: "main" };

    return this.client
      .waitForInitialization()
      .then(() => {
        return new Promise<boolean>((resolve, reject) => {
          void this.client.variation(key, context, false, this.getFeatureFlagValue(resolve, reject));
        });
      })
      .catch((error: Error) => {
        console.error(`Launch Darkly SDK failed to initialize: ${error}`);
        throw error;
      });
  }

  getFeatureFlagValue(resolve: ResolvedPromiseHandler, reject: RejectedPromiseHandler) {
    return async (error: Error, flagValue: boolean) => {
      void this.client.flush(() => this.client.close());
      error ? reject(error) : resolve(Boolean(flagValue));
    };
  }
}
