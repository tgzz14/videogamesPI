const {videogameDBByName, videogameDB} = require('./videogameDB');
const {videogamesAPI, videoByNameAPI} = require('./videogamesAPI');
require('dotenv').config();

const getVideogames = async (req, res) => {
    try {
        const {name} = req.query;
        if(name){
          let videogamesFindBD = await videogameDBByName(name)
          let videogameFindAPI = await videoByNameAPI(name)
          
          let allGamesByName = videogamesFindBD.concat(videogameFindAPI);

          if(allGamesByName.length < 1){ 
            throw new Error('this video game not exists');
           } else {
               allGamesByName.length > 15 ?  allGamesByName.length = 15 : '';
               console.log(allGamesByName.length)
              res.status(200).json(allGamesByName)
           }

        } else {

            let videogameAllBD = await videogameDB();
            let videogames100API = await videogamesAPI(); //100 traje de la api
            let allVideogames = videogameAllBD.concat(videogames100API)
            console.log(allVideogames.length)
            res.status(200).json(allVideogames)

        }
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getVideogames