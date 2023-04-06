const { Videogame, Genre } = require('../db.js')
const {Op} = require('sequelize')

const videogameDBByName = async (name) => {
    let arr = [];
    let videogamesFind = await Videogame.findAll({
        where: { name: {[Op.like] : `%${name.toLowerCase()}%`}},
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    arr = videogamesFind.map(vg => {
       return {name: vg.name, id:vg.id, image: vg.image, rating: vg.rating, createdByDB: vg.createdByDB, genres: vg.Genres?.map(el => el['name'])}
        })

    return arr
}

const videogameDB = async () => {
    let videogamesFind = await Videogame.findAll()
    let arr = [];

    videogamesFind && videogamesFind.map(async (el) => {

        let vg = await Videogame.findOne({
            where: { id: el.id},
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        arr.push({name: vg.name, id: vg.id, image: vg.image, rating: vg.rating, createdByDB: vg.createdByDB, genres: vg.Genres?.map(el => el.name)});
    })
    

    return arr;
}

module.exports = {
    videogameDBByName,
    videogameDB
}; 