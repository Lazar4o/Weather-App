module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ['module:react-native-dotenv', {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "allowUndefined": false,
        "path": ".env",
        "safe": false,
        "allowList": null,
    }],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin"
    ]
  };
};
