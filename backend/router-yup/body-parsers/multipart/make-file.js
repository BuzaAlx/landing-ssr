const { parse: pathParse, relative: pathRelative } = require("path");

const { extension: mimeExtension } = require("mime-types");

const { config } = require("../../../config");

const makeFile = (rawFile) => {
  const { ext } = pathParse(rawFile.path);

  const file = {
    name: pathParse(rawFile.name).name,
    extension: ext.slice(1),
    savedAs: pathRelative(config.files.storagePath, rawFile.path),
    mimeType: rawFile.type,
    size: rawFile.size,
    hash: rawFile.hash,
    path: rawFile.path,
  };

  if (file.extension.length === 0) {
    file.extension = mimeExtension(ext);
  }

  return file;
};

exports.makeFile = makeFile;
