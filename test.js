var test = require('tape')
var util = require('gulp-util')
var html = require('remark-html')
var es = require('event-stream')
var remark = require('.')

var File = util.File
var PluginError = util.PluginError

var fixture = new File({
  path: 'fixture.txt',
  contents: Buffer.from('_italic_, **bold**.')
})

var commonmarkFixture = new File({
  path: 'fixture-commonmark.txt',
  contents: Buffer.from('1) List in commonmark')
})

test('gulp-remark', function(t) {
  t.test('should not do anything', function(st) {
    st.plan(2)

    const stream = remark({silent: true})
    stream.write(fixture)

    stream.once('data', once)

    function once(file) {
      st.equal(file.relative, 'fixture.txt')
      st.equal(String(file.contents), '_italic_, **bold**.\n')
    }
  })

  t.test('should support settings', function(st) {
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

  t.test('should use plugins', function(st) {
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

  t.test('should throw PluginError with streams', function(st) {
    var stream = new File({
      contents: es.readArray(['_italic_', '**bold**', '.'])
    })

    st.throws(write, PluginError)

    st.end()

    function write() {
      remark().write(stream)
    }
  })

  t.end()
})
