const axios = require('axios');

// fonction js pour envoyé tous les clients
exports.getAllItems = async (req, res) => {
    axios.post('https://api.kedufront.juniortaker.com/order/', req.json)
    .then(function (response) {
        // ça marche
        console.log(response);
    })
    .catch(function (error) {
        // erreur
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error);
    })
};
