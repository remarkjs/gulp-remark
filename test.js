var PassThrough = require('stream').PassThrough
var PluginError = require('plugin-error')
var Vinyl = require('vinyl')
var test = require('tape')
var html = require('remark-html')
var remark = require('.')

var fixture = new Vinyl({
  path: 'fixture.txt',
  contents: Buffer.from('_italic_, **bold**.')
})

var commonmarkFixture = new Vinyl({
  path: 'fixture-commonmark.txt',
  contents: Buffer.from('1) List in commonmark')
})

test('gulp-remark', function (t) {
  t.test('should not do anything', function (st) {
    st.plan(2)

    const stream = remark({silent: true})
    stream.write(fixture)

    stream.once('data', once)

    function once(file) {
      st.equal(file.relative, 'fixture.txt')
      st.equal(String(file.contents), '*italic*, **bold**.\n')
    }
  })

  t.test('should support settings', function (st) {
    var stream = remark({settings: {commonmark: true}, silent: true}).use(html)

    st.plan(2)

    stream.write(commonmarkFixture)

    stream.once('data', once)

    function once(file) {
      st.equal(file.relative, 'fixture-commonmark.txt')
      st.equal(
        String(file.contents),
        '<ol>\n<li>List in commonmark</li>\n</ol>\n'
      )
    }
  })

  t.test('should use plugins', function (st) {
    var stream = remark({silent: true}).use(html)

    st.plan(2)

    stream.write(fixture)

    stream.once('data', once)

    function once(file) {
      st.equal(file.relative, 'fixture.txt')
      st.equal(
        String(file.contents),
        '<p><em>italic</em>, <strong>bold</strong>.</p>\n'
      )
    }
  })

  t.test('should throw PluginError with streams', function (st) {
    var inStream = new PassThrough()

    var outStream = new Vinyl({contents: inStream})

    st.throws(write, PluginError)

    st.end()

    function write() {
      inStream.write('_italic_')
      inStream.write('**bold**')
      inStream.write('.')
      remark().write(outStream)
    }
  })

  t.end()
})
