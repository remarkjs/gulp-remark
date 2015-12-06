import { File, PluginError } from 'gulp-util';
import { equal, throws } from 'assert';
import es from 'event-stream';
import gulpMdast from './index';
import html from 'mdast-html';

const fixture = new File({
  path: 'fixture.txt',
  contents: new Buffer(`_italic_, **bold**.`)
});

it('should not do anything', done => {
  const stream = gulpMdast({
    emphasis: "*",
    strong: "_"
  });
  stream.write(fixture);

  stream.once('data', file => {
    equal(file.relative, 'fixture.txt');
    equal(file.contents.toString().trim(), `*italic*, __bold__.`);
    done();
  });
});

it('should use plugins', done => {
  const stream = gulpMdast().use(html);
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
  throws(() => { gulpMdast().write(stream) }, PluginError);
});
