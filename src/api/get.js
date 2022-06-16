const { getFile } = require("../lib/aws");

async function getReplay(req, res) {
  const replayId = parseInt(req.query.id);

  console.log(`Serving replay ID ${replayId}`);

  try {
    const replay = await getFile(`replays/${replayId}.osr`);

    res.writeHead(200);
    res.end(replay);
  } catch (e) {
    res.writeHead(404);
    res.end("Not found");
  }
}

module.exports = getReplay;
