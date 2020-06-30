var ObjM = require('../model/TemoignageModel.js');

exports.getAllTemoignage = function (req, res) {
  ObjM.getAllTemoignage(function (err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send(data);
      console.log('res', data);
    }
  });
};

exports.searchTemoignages = function (req, res) {
  ObjM.searchTemoignages(function (err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send(data);
      console.log('res', data);
    }
  });
};


exports.read_a_data = function (req, res) {
  ObjM.getdataById(req.params.dataId, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_a_data = function (req, res) {
  ObjM.updateById(req.params.dataId, new ObjM(req.body), function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.delete_a_data = function (req, res) {
  ObjM.remove(req.params.dataId, function (err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'data successfully deleted' });
  });
};