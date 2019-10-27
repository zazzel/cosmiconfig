/* eslint-disable @typescript-eslint/no-require-imports */
import { ExplorerOptions, ExplorerOptionsSync, Loaders } from './types';

function getLoaders(options: ExplorerOptions | ExplorerOptionsSync): Loaders {
  const result = Object.assign({}, options.loaders);

  if (
    !result['.js'] &&
    options.searchPlaces.some((place) => place.endsWith('.js'))
  ) {
    result['.js'] = require('./loadJs').loadJs;
  }

  if (
    !result['.yaml'] &&
    options.searchPlaces.some((place) => place.endsWith('.yaml'))
  ) {
    result['.yaml'] = require('./loadYaml').loadYaml;
  }

  if (
    !result['.yml'] &&
    options.searchPlaces.some((place) => place.endsWith('.yml'))
  ) {
    result['.yml'] = require('./loadYaml').loadYaml;
  }

  if (
    !result['.json'] &&
    options.searchPlaces.some((place) => place.endsWith('.json'))
  ) {
    result['.json'] = require('./loadJson').loadJson;
  }

  if (
    !result['noExt'] &&
    options.searchPlaces.some((place) => !place.slice(1).includes('.'))
  ) {
    result['noExt'] = require('./loadYaml').loadYaml;
  }

  return result;
}

export { getLoaders };
