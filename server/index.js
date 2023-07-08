import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import defaultData from './defaultdata.js';
import router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()   // initialize the express js by using app varible as a function

app.use(cors());   // this will help in connecting port 80 and port 3000 (backend and frontend port)
app.use(bodyParser.json({ extended: true }));  //bodyparser will parse the json file
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

dotenv.config();       // calling dotenv file.
const USERNAME = process.env.DB_USERNAME;   // accessing data from .env file
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);    // passed username and password of .env file to Connection of db.js

const PORT = 80;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

defaultData();  // calling after making of port server