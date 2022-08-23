module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
      },
    ],
    'tailwindcss-react-native/babel',
    'react-native-reanimated/plugin']
};
