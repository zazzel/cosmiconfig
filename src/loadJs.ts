import importFresh from 'import-fresh';
import { LoaderSync } from './index';

const loadJs: LoaderSync = function loadJs(filepath) {
  const result = importFresh(filepath);
  return result;
};

export { loadJs };
