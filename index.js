import { PluginError } from 'gulp-util';
import { obj } from 'through2';
import mdast from 'mdast';

import pkg from './package';

const PLUGIN_NAME = pkg.name;

export default function gulpMdast(options = {}) {
  const M = mdast();

  const plugin = obj(function (file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }
    if (file.isStream()) {
      return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }
    if (file.isBuffer()) {
      file.contents = new Buffer(M.process(file.contents.toString(), options));
    }
    this.push(file);
    cb(null, file);
  });

  plugin.use = (pls, opts) => {
    M.use(pls, opts);
    return plugin;
  };

  return plugin;
};
