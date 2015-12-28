'use strict';
import through from 'through2';
import convertVinylToVfile from 'convert-vinyl-to-vfile';
import configure from 'remark/lib/cli/file-set-pipeline/configure';
import transform from 'remark/lib/cli/file-set-pipeline/transform';
import log from 'remark/lib/cli/file-set-pipeline/log';

export default function gulpRemark() {
  return through.obj(function (file, encoding, callback) {
    let error = null;
    let convertedFile;
    let vFile;
    let context;

    if (!file || file.isNull()) {
      this.push();
      return callback();
    }

    vFile = convertVinylToVfile(file);

    // Hidden-feature to enable mdast to rewrite files.
    // Otherwise the CLI ignores you.
    vFile.namespace('remark:cli').given = true;

    // See for more options: remark/lib/cli/cli
    // Probably also insert plugins here when given.
    context = {
      detectRC: true,
      cwd: process.cwd(),
      stdout: process.stdout,
      stderr: process.stderr,
      files: [
        vFile
      ]
    };

    // remarkignore(5) is not yet supported, as its use is inside
    // remark/lib/cli/file-set-pipeline/file-system.

    configure(context);

    transform(context, function (err) {
      if (err) {
        callback(error);
      } else {
        log(context);

        // Done! TODO: set `vFile.contents` back on the vinyl `file`.
        callback(null, file);
      }
    });
  }, function (callback) {
    callback();
  });
};
