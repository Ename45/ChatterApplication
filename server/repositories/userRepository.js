const mongoose = require('mongoose')
const User = require('../models/userModel')

const getAllUsers = async(req, res) =>{
  try{
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);

  }catch(error){
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async(req, res) =>{
  
};

const saveNewUser = async(req, res) =>{
  
};

const updateUserDetail = async(req, res) =>{
  
};

const removeUserFromList = async(req, res) =>{
  
};



module.exports = {
  getAllUsers,
  getUserById, 
  saveNewUser, 
  updateUserDetail, 
  removeUserFromList,
};