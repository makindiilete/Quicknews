import "dotenv/config";

type ENV_TYPES = "development";

const GET_CUSTOM_CONFIG = {
  development: {
    name: "Quick News",
    slug: "quicknews",
    bundleIdentifier: "com.michaelakindiilete.quicknews",
    version: "1.0.0",
    versionCode: 1,
  },
};

const enviroment = process.env.NODE_ENV ? process.env.NODE_ENV : "development"; // Default to development
const ENV_CONFIG = GET_CUSTOM_CONFIG[enviroment as ENV_TYPES];

export default ({ config }: any) => {
  return {
    ...config,
    name: ENV_CONFIG.name,
    slug: ENV_CONFIG.slug,
    version: ENV_CONFIG.version,
    ios: {
      bundleIdentifier: ENV_CONFIG.bundleIdentifier,
      buildNumber: ENV_CONFIG.version,
    },
    android: {
      package: ENV_CONFIG.bundleIdentifier,
      versionCode: ENV_CONFIG.versionCode,
    },
  };
};
