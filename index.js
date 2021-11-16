import {gulpEngine} from 'unified-engine-gulp'
import {remark as processor} from 'remark'

export const remark = gulpEngine({
  processor,
  name: 'gulp-remark',
  pluginPrefix: 'remark',
  packageField: 'remarkConfig',
  rcName: '.remarkrc',
  ignoreName: '.remarkignore'
})
