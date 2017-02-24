import engine from 'unified-engine-gulp';
import remark from 'remark';

import pkg from './package';

export default engine({
  name: pkg.name,
  processor: remark,
  rcName: '.remarkrc',
  packageField: 'remarkConfig',
  ignoreName: '.remarkignore',
  pluginPrefix: 'remark'
});
