import { PluginError } from 'gulp-util';
import { obj } from 'through2';
import toVFile from 'convert-vinyl-to-vfile';
import CLI     from 'remark/lib/cli/cli';
import run     from 'remark/lib/cli';
import reporter from 'vfile-reporter';

import pkg from './package';

const PLUGIN_NAME = pkg.name;

export default function gulpRemark(options = {}) {

  const cli = new CLI({
    settings: options,
    cwd:      process.cwd(),
    stdout:   process.stdout,
    stderr:   process.stderr
  });

  const plugin = obj(function (file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    if (file.isBuffer()) {
      const VFile = toVFile(file);
      cli.files = [VFile];

      run(cli, (error, success) => {
        if (error) {
          callback(error);
        } else if (cli.traverser.ignore.shouldIgnore(VFile.basename())) {
          // Return callback if file is in .remarkignore
          callback(null, file);
        } else {
          // if not silent, output messages
          if (!options.silent) {
            console.log(reporter(cli.files));
          }

          // Throw error if frail is enabled
          if (options.frail && !success) {
            callback(new PluginError(PLUGIN_NAME, 'Unsuccessful running'));
          }
          
          // Return transformed contents
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
