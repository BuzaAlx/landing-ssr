const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const fs = require("fs");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESSBUCKET_KEY;
const secretAccessKey = process.env.AWS_SECRETBUCKET_KEY;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

//upload
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.hash,
    ContentType: file.mimeType,
  };

  return s3Client.send(new PutObjectCommand(uploadParams));
}

exports.uploadFile = uploadFile;

//download
const getFileUrl = async (file) => {
  const getObjectParams = {
    Bucket: bucketName,
    Key: file.hash,
  };

  const command = new GetObjectCommand(getObjectParams);

  let url = await getSignedUrl(s3Client, command, { expiresIn: 500000 });
  return url;
};

exports.getFileUrl = getFileUrl;

//delete

const deleteFile = async (f) => {
  await s3Client.send(
    new DeleteObjectCommand({ Bucket: bucketName, Key: f.hash })
  );
};

exports.deleteFile = deleteFile;
