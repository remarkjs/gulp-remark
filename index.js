import { PluginError } from 'gulp-util';
import { obj } from 'through2';
import toVFile from 'convert-vinyl-to-vfile';
import CLI     from 'remark/lib/cli/cli';
import run     from 'remark/lib/cli';

import pkg from './package';

const PLUGIN_NAME = pkg.name;

export default function gulpRemark() {
  const cli = new CLI({
    detectRC: true,
    cwd:      process.cwd(),
    stdout:   process.stdout,
    stderr:   process.stderr
  });

  const plugin = obj(function (file, encoding, callback) {
    if (file.isNull()) {
      this.push();
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    if (file.isBuffer()) {
      cli.files = [toVFile(file)];
      run(cli, (error, success) => {
        if (error) {
          callback(error);
        } else {
          console.log(cli.files);
          file.contents = new Buffer(cli.files[0].contents, 'utf-8');
          callback(null, file);
        }
      });
    }
  });

  plugin.use = (pls, opts) => {
    cli.use(pls, opts);
    return plugin;
  };

  return plugin;
};
