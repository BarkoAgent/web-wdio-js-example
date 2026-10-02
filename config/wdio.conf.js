import merge from 'deepmerge';
import baseConfig from './wdio.conf-base.js';
import { chrome, firefox } from './capabilities.js';

export const config = merge(baseConfig, {
  capabilities: [chrome(2), firefox(2)],
});
