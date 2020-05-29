const db = require('../models/index');
const Identifier = db.identifier;
const rs = require('./function/return_success.function');
const re = require('./function/return_error.function');

exports.create = (req, res) => {
  if(!req.body.customer){
    re(res, null, 'input empty');
  }
  const identifier = new Identifier({
    cardCode: req.body.customer.substring(0, 10).toUpperCase(),
    customer: req.body.customer
  });

  identifier.save(identifier).then((data) => {
    if(data){
      rs(res, data);
    }else{
      re(res, null, 'create');
    }
  }).catch((err) => {
    re(res, err, null);
  });
};

exports.getAll = (req, res) => {
  Identifier.find({}).populate('customer').then((data) => {
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
  let id = req.params .identifierId;
  Identifier.findById(id).populate('customer').then((data) => {
    if(data){
      rs(res, data);
    }else{
      re(res, null, 'data doesnt exist');
    }
  }).catch((err) => {
    re(res, err, null);
  });
};

exports.update = (req, res) => {
  let id = req.parasm.identifierId;
  Identifier.findByIdAndUpdate(id, req.body, {new:true}).then((data) => {
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
  let id = req.params.identifierId;
  Identifier.findByIdAndDelete(id).then((data) => {
    if(data){
      rs(res, 'delete success');
    }else{
      re(res, null, 'delete');
    }
  }).catch((err) => {
    re(res, err, null);
  });
};

