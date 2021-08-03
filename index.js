import engine from 'unified-engine-gulp'
import processor from 'remark'

export const remark = engine({
  processor,
  name: 'gulp-remark',
  pluginPrefix: 'remark',
  packageField: 'remarkConfig',
  rcName: '.remarkrc',
  ignoreName: '.remarkignore'
})
