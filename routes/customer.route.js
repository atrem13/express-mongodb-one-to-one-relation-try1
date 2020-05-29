module.exports = (app, express) => {
  const customer = require('../controllers/customer.controller');
  let router = express.Router();
  router.get('/', customer.getAll);
  router.post('/', customer.create);
  router.get('/get/:customerId', customer.get);
  router.put('/update/:customerId', customer.update);
  router.delete('/delete/:customerId', customer.delete);

  app.use('/api/customer', router);
};