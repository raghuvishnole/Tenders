import "../models/connection.js";
import url from "url";

//to link models to controller
import CategorySchemaModel from '../models/category.model.js';
export const save = async (req, res) => {
  var cList = await CategorySchemaModel.find();
  var l = cList.length;
  var _id = l == 0 ? 1 : cList[l - 1]._id + 1;
  const cDetails = {
    ...req.body,
    "_id": _id
  };
  try {
    await CategorySchemaModel.create(cDetails);
    res.status(201).json({
      "status": true
    });
  } catch (error) {
    res.status(500).json({
      "status": false
    });
  }
};
export const fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query.condition_obj;
  if (condition_obj != undefined) condition_obj = JSON.parse(condition_obj);else condition_obj = {};
  var cList = await CategorySchemaModel.find(condition_obj);
  if (cList.length != 0) res.status(200).json(cList);else res.status(404).json({
    "status": "Resource not found"
  });
};
export var deleteUser = async (req, res) => {
  let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if (cDetails) {
    let category = await CategorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
    if (category) res.status(200).json({
      "msg": "success"
    });else res.status(500).json({
      "status": "Server Error"
    });
  } else res.status(404).json({
    "status": "Requested resource not available"
  });
};
export var update = async (req, res) => {
  let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if (cDetails) {
    let category = await CategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj), {
      $set: JSON.parse(req.body.content_obj)
    });
    if (category) res.status(200).json({
      "msg": "success"
    });else res.status(500).json({
      "status": "Server Error"
    });
  } else res.status(404).json({
    "status": "Requested resource not available"
  });
};