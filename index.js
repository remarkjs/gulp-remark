var engine = require('unified-engine-gulp')
var remark = require('remark')
var pkg = require('./package.json')

module.exports = engine({
  processor: remark,
  name: pkg.name,
  pluginPrefix: 'remark',
  packageField: 'remarkConfig',
  rcName: '.remarkrc',
  ignoreName: '.remarkignore'
})
