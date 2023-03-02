const express = require('express');
const { deleteFunction } = require('../controllers/adminControllers/delete');
const { getFunction } = require('../controllers/adminControllers/get');
const { patchFunction } = require('../controllers/adminControllers/patch');
const { postFunction } = require('../controllers/adminControllers/post');
const { authCookie } = require('../middleware/authCookie');
const adminRoute = express.Router();

adminRoute.get('/', getFunction );
adminRoute.post('/', authCookie, postFunction );
adminRoute.patch('/', authCookie, patchFunction );
adminRoute.delete('/', authCookie, deleteFunction );

exports.adminRoute = adminRoute;