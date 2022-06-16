const { uploadFile } = require("../lib/aws");

async function uploadReplay(req, res) {
  const replayId = req.query.id;
  const replayData = req.body;

  console.log(`Saving replay ID ${replayId}`);

  await uploadFile(`replays/${replayId}.osr`, replayData);

  res.writeHead(200);
  res.end("OK");
}

module.exports = uploadReplay;
