/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');


const config = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      experimentalImportSupport: false,
      inlineRequires: true,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();

module.exports = mergeConfig(getDefaultConfig(__dirname), config);