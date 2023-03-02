const express = require('express');
const server = express()
const cors = require('cors');
const { authRoute } = require('./routes/authRoutes');
const { adminRoute } = require('./routes/adminRoute');
const cookieParser = require('cookie-parser');
server.use(cookieParser());
server.use(express.json());
server.use(cors());

server.use('/',  adminRoute)

server.use('/auth', authRoute)


server.listen(5050)