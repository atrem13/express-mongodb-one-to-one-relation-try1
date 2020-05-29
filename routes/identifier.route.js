module.exports = (app, express) => {
  const identifier = require('../controllers/identifier.controller');
  let router = express.Router();
  router.get('/', identifier.getAll);
  router.post('/', identifier.create);
  router.get('/get/:identifierId', identifier.get);
  router.put('/update/:identifierId', identifier.update);
  router.delete('/delete/:identifierId', identifier.delete);

  app.use('/api/identifier', router);
};