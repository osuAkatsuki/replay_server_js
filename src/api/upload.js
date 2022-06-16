const { uploadFile } = require("../lib/aws");

async function uploadReplay(req, res) {
    const replayId = req.query.id;
    const replayData = req.body;

    console.log(`Saving replay ID ${replayId}`);

    try {
        await uploadFile(`replays/${replayId}.osr`, replayData);

        res.writeHead(200);
        res.end("OK");
    } catch (e) {
        res.writeHead(400);
        res.end("Failed to save replay");
    }
}

module.exports = uploadReplay;