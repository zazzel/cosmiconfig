import parseJson from 'parse-json';
import { LoaderSync } from './index';

const loadJson: LoaderSync = function loadJson(filepath, content) {
  try {
    const result = parseJson(content);
    return result;
  } catch (error) {
    error.message = `JSON Error in ${filepath}:\n${error.message}`;
    throw error;
  }
};

export { loadJson };
