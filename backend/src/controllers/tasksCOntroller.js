const { response } = require("express")

const getAll = (req, res) => {
    return res.status(200).json({ message: 'Controler, está tudo certo' });

}

module.exports = {
    getAll
}