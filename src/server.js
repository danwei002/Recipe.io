const express = require("express");
const app = express();

const PORT = 8888;

app.get("/", (req, res) => {
    res.send("govind is gay");
})

app.listen(PORT, () => console.log("App is listening on port :" + PORT));