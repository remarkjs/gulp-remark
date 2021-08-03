import {PassThrough} from 'stream'
import PluginError from 'plugin-error'
import Vinyl from 'vinyl'
import test from 'tape'
import remarkHtml from 'remark-html'
import {remark} from './index.js'

const fixture = new Vinyl({
  path: 'fixture.txt',
  contents: Buffer.from('_italic_, **bold**.')
})

const commonmarkFixture = new Vinyl({
  path: 'fixture-commonmark.txt',
  contents: Buffer.from('1) List in commonmark')
})

test('gulp-remark', (t) => {
  t.test('should not do anything', (st) => {
    st.plan(2)

    const stream = remark({silent: true})
    stream.write(fixture)

    stream.once('data', (/** @type {Vinyl} */ file) => {
      st.equal(file.relative, 'fixture.txt')
      st.equal(String(file.contents), '*italic*, **bold**.\n')
    })
  })

  t.test('should support settings', (st) => {
    const stream = remark({settings: {commonmark: true}, silent: true}).use(
      remarkHtml
    )

    st.plan(2)

    stream.write(commonmarkFixture)

    stream.once('data', (/** @type {Vinyl} */ file) => {
      st.equal(file.relative, 'fixture-commonmark.txt')
      st.equal(
        String(file.contents),
        '<ol>\n<li>List in commonmark</li>\n</ol>\n'
      )
    })
  })

  t.test('should use plugins', (st) => {
    const stream = remark({silent: true}).use(remarkHtml)

    st.plan(2)

    stream.write(fixture)

    stream.once('data', (/** @type {Vinyl} */ file) => {
      st.equal(file.relative, 'fixture.txt')
      st.equal(
        String(file.contents),
        '<p><em>italic</em>, <strong>bold</strong>.</p>\n'
      )
    })
  })

  t.test('should throw PluginError with streams', (st) => {
    const inStream = new PassThrough()

    const outStream = new Vinyl({contents: inStream})

    st.throws(write, PluginError)

    st.end()

    function write() {
      inStream.write('_italic_')
      inStream.write('**bold**')
      inStream.write('.')
      remark({}).write(outStream)
    }
  })

  t.end()
})
