const { parse: pathParse } = require("path");
const { extension: mimeExtension } = require("mime-types");

const makeFile = (rawFile) => {
  const { ext } = pathParse(rawFile.path);

  const file = {
    name: pathParse(rawFile.name).name,
    extension: ext.slice(1),
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
