/* eslint-disable import/no-extraneous-dependencies */
const {
  expect
} = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const {
  Videogame,
  conn
} = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'example',
  platforms: ['nintendo'],
  rating: 1.2,
  released: '12-02-2015',
  image: 'img'
};

describe('Videogame routes', () => {
  
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Videogame.sync({
      force: true
    })
    .then(() => Videogame.create(videogame)));

  it('should get 200 for the /genres', async () =>
    await agent.get('/genres').expect(200));

  it('should get 200 for the route /videogames', async () =>
    await agent.get('/videogames').expect(200));
  
    it('should get 500 for the route /videogames/-22222', async () =>
    await agent.get('/videogames/-22222').expect(500));

  it('should get 200 for the route /videogames/1', async () =>
    await agent.get('/videogames/1').expect(200));

  it('should get detail and object with the properties name, id, description, so on.', async () =>
    await agent.get('/videogames/1').then(res => {
      expect(res.body).to.deep.equal({
        "name": "D/Generation HD",
        "id": 1,
        "description": "The year is 2021, and Genoq has become a leading corporation in bio-medical research. However the tower, some 90 stories high, is not all that it seems. Somewhere within the tower, highly illegal bio-weapons research has been conducted in secret. June 26th, disaster strikes and the lethal organic weapons have escaped and threaten not only the staff members stranded in the tower, but the world itself.\nYou arrive on the 80th floor with an urgent package addressed to Derrida, the lead scientist at Genoq working on the bio-weapons research. Set back from your goal, you must climb the tower, assisting those in need or focusing solely on your task at hand, and stopping the virus from escaping the tower and threatening all life on the planet.\nWill you help the stranded survivors or hinder them? Can you deliver the package to Derrida in time? Can you prevent the impending catastrophe and escape with your life?\nKey Features\nNew high res graphics\nNew music by Mark 'TDK' Knight\nNew control menu\nCan save at any point in the game\nLeaderboards\nAchievements\nSame great gameplay",
        "platforms": [
          "Xbox One",
          "PlayStation 4",
          "Nintendo Switch",
          "PC",
          "macOS"
        ],
        "rating": 0,
        "released": "2015-10-23",
        "image": "https://media.rawg.io/media/screenshots/5c4/5c41cb3b0d15ef0974f930898cedbc6c.jpg",
        "genres": [
          "Adventure",
          "Puzzle"
        ]
      })
    }));
});