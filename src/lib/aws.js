const aws = require("aws-sdk");

aws.config.loadFromPath("./config.json");

const endpoint = new aws.Endpoint("s3.wasabisys.com");
const s3 = new aws.S3({ endpoint: endpoint });

async function uploadFile(filePath, fileData) {
  const params = {
    Bucket: "akatsuki.pw",
    Key: filePath,
    Body: fileData,
  };

  await s3.upload(params).promise();
}

async function getFile(filePath) {
  const params = {
    Bucket: "akatsuki.pw",
    Key: filePath,
  };

  const response = await s3.getObject(params).promise();
  return Buffer.from(response.Body);
}

module.exports = { uploadFile, getFile };
