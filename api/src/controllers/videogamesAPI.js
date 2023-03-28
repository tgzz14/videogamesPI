require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');

const videogamesAPI = async () => {
    try {
        let url = 'https://api.rawg.io/api/games';
        let page = 1; //44246
        let arr = [];
 
        while(page <= 5){
            const {data} = await axios.get(`${url}?key=${API_KEY}&page=${page}`) 
            const {results} = data;

            results.map((el) => {
               arr = [...arr, {
                name: el.name,
                id: el.id,
                //platforms: el.platforms.map(val => val.platform.name),
                rating: el.rating,
                //released: el.released,
                image: el.background_image,
                createdByDB: false,
                genres: el.genres.map(val => val.name)
            } ]
               
            });

            page++;
        }

        return arr;
        
    } catch (error) {
        return error.message; 
    }
    
}

const videoByNameAPI = async (name) => {
    let url = "https://rawg.io/api/games?search=";
    let {data} = await axios(`${url}${name}&key=${API_KEY}`);
    let {results} = data;
    let arr = [];

    let videoByName = results.filter(el =>{
        if(el['name'].toLowerCase().includes(name.toLowerCase())) return el;    
    })
    if(videoByName.length < 1) {
        return []
    } else {
        videoByName.map((el) => {
            arr = [...arr, {
             name: el.name,
             id: el.id,
             //platforms: el.platforms.map(val => val.platform.name),
             rating: el.rating,
             //released: el.released,
             image: el.background_image,
             createdByDB: false,
             genres: el.genres.map(val => val.name)
         }]});}
        return arr;
}


module.exports = {videogamesAPI, videoByNameAPI };
  
