import { File, PluginError } from 'gulp-util';
import { equal, throws }     from 'assert';
import html                  from 'remark-html';
import es                    from 'event-stream';

import gulpRemark            from './index';

const fixture = new File({
  path: 'fixture.txt',
  contents: new Buffer(`_italic_, **bold**.`)
});

const commonmarkFixture = new File({
  path: 'fixture-commonmark.txt',
  contents: new Buffer(`1) List in commonmark`)
});

it('should not do anything', done => {
  const stream = gulpRemark({ silent: true });
  stream.write(fixture);

  stream.once('data', file => {
    equal(file.relative, 'fixture.txt');
    equal(file.contents.toString().trim(), `_italic_, **bold**.`);
    done();
  });
});

it('should support settings', done => {
  const stream = gulpRemark({
    commonmark: true,
    silent: true
  }).use(html);

  stream.write(commonmarkFixture);

  stream.once('data', file => {
    equal(file.relative, 'fixture-commonmark.txt');
    equal(
      file.contents.toString().trim(),
      '<ol>\n<li>List in commonmark</li>\n</ol>'
    );
    done();
  });
});

it('should use plugins', done => {
  const stream = gulpRemark({ silent: true }).use(html);
  stream.write(fixture);

  stream.once('data', file => {
    equal(file.relative, 'fixture.txt');
    equal(
      file.contents.toString().trim(),
      '<p><em>italic</em>, <strong>bold</strong>.</p>'
    );
    done();
  });
});

it('should throw PluginError with streams', () => {
  const stream = new File({
    contents: es.readArray(['_italic_', '**bold**', '.'])
  });
  throws(() => { gulpRemark().write(stream); }, PluginError);
});
