const express = require("express");
const chatController = require("./routes/chat.controller");

const app = express();
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})


app.get("/", (req, res)=>{
    res.send("Hello from Node.js")
});

app.get("/chat",chatController.chat);
app.post("/chat",chatController.reply);