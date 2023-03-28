require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const {Genre} = require('../db.js')
let url = 'https://api.rawg.io/api/genres';

const getGenre = async (req, res) => {
 try {
    const {data} = await axios(`${url}?key=${API_KEY}`) 
    const {results} = data;

    results.map( async (genre) => {
        await Genre.findOrCreate({
            where: {
                name: genre.name
            }})    
    })

    let genreBD = await Genre.findAll({order: [['id', 'ASC']]})
    res.status(200).json(genreBD)

 } catch (error) {
    res.status(500).json({error: error.message})
 }
}

module.exports = getGenre; 