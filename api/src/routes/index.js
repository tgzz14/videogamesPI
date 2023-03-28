const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getGenre = require('../controllers/getGenre.js');
const postVideogame = require('../controllers/postVideogame.js');
const getVideogames = require('../controllers/getVideogames.js');
const getVideogameById = require('../controllers/getVideogameById.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/genres', getGenre);
router.get('/videogames', getVideogames);
router.get('/videogames/:idVideogame',getVideogameById);
router.post('/videogames', postVideogame);




module.exports = router;
