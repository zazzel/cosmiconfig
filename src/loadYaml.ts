import yaml from 'yaml';
import { LoaderSync } from './index';

const loadYaml: LoaderSync = function loadYaml(filepath, content) {
  try {
    const result = yaml.parse(content, { prettyErrors: true });
    return result;
  } catch (error) {
    error.message = `YAML Error in ${filepath}:\n${error.message}`;
    throw error;
  }
};

export { loadYaml };
