import {gulpEngine} from 'unified-engine-gulp'
import {remark as processor} from 'remark'

export const remark = gulpEngine({
  // @ts-expect-error: fine.
  processor,
  name: 'gulp-remark',
  pluginPrefix: 'remark',
  packageField: 'remarkConfig',
  rcName: '.remarkrc',
  ignoreName: '.remarkignore'
})
