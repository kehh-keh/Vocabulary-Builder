const wordModel = require("../models/wordModel");

exports.getWords = async (req, res) => {
    const words = await wordModel.getWords();
    res.json(words);
};

exports.addWord = async (req, res) => {
    const { word } = req.body;

    const newWord = await wordModel.addWord({
        word
    });

    res.json(newWord);
};

exports.deleteWord = async (req, res) => {
    const id = req.params.id;

    await wordModel.deleteWord(id);

    res.json({
        message: "Deleted successfully"
    });
};