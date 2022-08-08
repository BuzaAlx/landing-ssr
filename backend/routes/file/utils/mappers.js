const { getFileUrl } = require("../../../s3");

const mapFileToResponse = async (file) => {
  let fileUrl = await getFileUrl(file);

  let obj = {
    id: file.id,
    name: file.name,
    extension: file.extension,
    // savedAs: file.savedAs,
    mimeType: file.mimeType,
    size: file.size,
    uploadedAt: file.uploadedAt,
    hash: file.hash,
    url: fileUrl,
  };

  return obj;
};

exports.mapFileToResponse = mapFileToResponse;
