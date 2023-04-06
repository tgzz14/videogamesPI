const { Videogame, Genre, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
    describe('rating', () => {
      it('should not work when the rating does not between 0 and 5', () => {
        Videogame.create({ rating: 10})
        .then(() => done(new Error('Validation error: Validation max on rating failed')))
        .catch(() => done());
      });
      it('should work when the rating does between 0 and 5', () => {
        Videogame.create({ rating: 2.5});
      });
    });
    describe('released date', () => {
      it('should not work when the released date is before 1952-01-02', () => {
        Videogame.create({ released: '1952-01-01'})
        .then(() => done(new Error("Validation error: Validation isAfter on released failed")))
        .catch(() => done());
      });
      it('should work when the released date is after 1952-01-01', () => {
        Videogame.create({ released: '1991-01-01'});
      });
    });
  });
});
