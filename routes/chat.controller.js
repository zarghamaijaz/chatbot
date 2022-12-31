const chatModel = require("../models/chat.models");

module.exports = {
    chat:(req,res) => {
        res.status(200).json(chatModel)
    },
    reply: (req, res)=>{
        res.send("Working on it")
    }
}