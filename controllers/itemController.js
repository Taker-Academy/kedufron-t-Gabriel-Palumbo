const axios = require('axios');

// fonction js pour récupérer tous les clients
exports.getAllItems = async (req, res) => {
    axios.get('https://api.kedufront.juniortaker.com/item/')
    .then(function (response) {
        // ça marche
        console.log(response);
        res.json(response.data);
    })
    .catch(function (error) {
        // erreur
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error);
    })
};
