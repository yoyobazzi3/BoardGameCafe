const BoardGame = require('../models/boardGameModel');

//get all board games
exports.getAllBoardGames = async (req, res) => {
    try {
        const boardGame = await BoardGame.find();
        res.json(boardGames);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
// Create (add) a new board game
exports.createBoardGame = async (req, res) => {
    const boardGame = new BoardGame(req.body);
    try {
        const newBoardGame = await boardGame.save();
        res.status(201).json(newBoardGame);
}   catch (error) {
    res.status(400).json({ message: error.message });
}
};

//get a board game by ID

exports.getAllBoardGamebyID = async (req, res) => {
    try {
        const boardGame = await BoardGame.findById(req.params.id);
        if (!boardGame) {
            return res.status(404).json({ message: 'Board game not found' });
        }
        res.json(boardGame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Update a board game by ID
export.updateBoardGame = async (req, res)  => {
    try {
        const boardGame = await BoardGame.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!boardGame) {
            return res.status(404).json({ message: 'Board game not found' });
        }

        res.json(boardGame);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};


//Delete a board game by ID
exports.deleteBoardGame = async (req, res) => {
    try {
        const boardGame = await BoardGame.findByIdAndDelete(req.params.id);
        if (!boardGame) {
            return res.status(404).json({ message: 'Board game not found' });
        }
        res.json({ message: 'Board game deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};