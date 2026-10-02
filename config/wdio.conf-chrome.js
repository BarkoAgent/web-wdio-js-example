import merge from 'deepmerge';
import baseConfig from './wdio.conf-base.js';
import { chrome } from './capabilities.js';

export const config = merge(baseConfig, {
  capabilities: [chrome(4)],
});
