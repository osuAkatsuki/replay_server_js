const express = require("express");

const getReplay = require("./api/get");
const uploadReplay = require("./api/upload");

const app = express();
app.use(express.raw({ limit: "5mb", type: () => true }));

app.get("/get", getReplay);
app.post("/save", uploadReplay);

app.listen(3030);
