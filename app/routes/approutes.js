var Temoignage = require('../controller/TemoignageController');
var User = require('../controller/UserController');

module.exports = function (app) {

  /* ----------------------- Liste Des Routes Temoignage ---------------------- */

  app.route('/api/temoignages').get(Temoignage.getAllTemoignage);
  app.route('/api/searchTemoignages').get(Temoignage.searchTemoignages);

  /* ----------------------- Liste Des Routes Temoignage ---------------------- */

  app.route('/api/loginadmin').post(User.authenticateAdmin);
  app.route('/api/register').post(User.register);

  /* ----------------------- Si la Route est Introuvable ---------------------- */

  app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
  });
};