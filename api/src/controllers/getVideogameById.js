const { Videogame, Genre } = require('../db.js');
let url = 'https://api.rawg.io/api/games';
const { API_KEY } = process.env;
const axios = require('axios');

const getVideogameById = async (req, res) => {
    try {
        let { idVideogame } = req.params;
        if(idVideogame.length === 36) {

            let videogameFindBD = await Videogame.findOne({
            where: { id: idVideogame },
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }})
            
            res.status(200).json(videogameFindBD)
            
        } else {
            let { data } = await axios(`${url}/${idVideogame}?key=${API_KEY}`); 
            
            let videogAPI = {
                name: data.name,
                id: data.id,
                description: data.description_raw,
                platforms: data.platforms.map(val => val.platform.name),
                rating: data.rating,
                released: data.released,
                image: data.background_image,
                genres: data.genres.map(val => val.name)
            }

            res.status(200).json(videogAPI)
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getVideogameById;