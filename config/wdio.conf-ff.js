import merge from 'deepmerge';
import baseConfig from './wdio.conf-base.js';
import { firefox } from './capabilities.js';

export const config = merge(baseConfig, {
  capabilities: [firefox(4)],
});
