module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset',  "@babel/preset-flow"],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: true,
          allowUndefined: false
        }
      ],
      ["@babel/plugin-proposal-decorators", { "legacy" : true }],
      ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    ]
  };
};
