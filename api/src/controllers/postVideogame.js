const { Videogame, Genre } = require('../db.js');

const postVideogame = async (req, res) => {
try {
    const { name, description, platforms, image, released, rating, genres } = req.body; 

    if(!name || !description || !platforms || !image || !released || !rating || !genres) {
    throw Error('complete necessary information')

    } else {
     let videoCreate = await Videogame.create({
        
            name: name.toLowerCase(),
            description,
            platforms,
            image,
            released,
            rating,
        
    })
 
     genres.forEach(async (value) =>{
        let findGenre = await Genre.findOne({
            where: {name: value}});
        await videoCreate.addGenre(findGenre)
        })

    res.status(200).json('created videogame successfully')
        }
} catch (error) {
    res.status(500).json({error: error.message})
}   
}

module.exports = postVideogame;