const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    mail: String,
    phone: String
})

const userModel = mongoose.model('user', userSchema)