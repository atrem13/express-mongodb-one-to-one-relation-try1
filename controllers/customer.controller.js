const db = require('../models/index');
const Customer = db.customer;
const rs = require('./function/return_success.function');
const re = require('./function/return_error.function');

// insert new customer
exports.create = (req, res) => {
  if(!req.body.name || !req.body.age || !req.body.gender){
    re(res, null, 'input empty');
  }
  const customer = new Customer({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender
  });
  customer.save(customer).then((data) => {
    if(data){
      rs(res, data);
    }else{
      re(res, null, 'create');
    }
  }).catch((err) => {
    re(res, err);
  });
};

exports.getAll = (req, res) => {
  Customer.find({}).then((data) => {
    if(data.length > 0){
      rs(res, data);
    }else{
      re(res, null, 'document empty');
    }
  }).catch((err) => {
    re(res, err, null);
  });
};

exports.get = (req, res) => {
  let id = req.params.customerId;
  Customer.findById(id).then((data) => {
    if(data){
      rs(res, data);
    }else{
      re(res, null, 'id doesnt exist');
    }
  }).catch((err) => {
    re(res, err, null);
  });
};

exports.update = (req, res) => {
  let id = req.params.customerId;
  Customer.findByIdAndUpdate(id, req.body, {new:true}).then((data) => {
    if(data){
      rs(res, data);
    }else{
      re(res, null, 'update');
    }
  }).catch((err) => {
    re(res, err, null);
  });
};

exports.delete = (req, res) => {
  let id = req.params.customerId;
  Customer.findByIdAndDelete(id).then((data) => {
    if(data){
      rs(res, 'delete data success');
    }else{
      re(res, null, 'delete');
    }
  }).catch((err) => {
    re(res, err, null);
  });
};