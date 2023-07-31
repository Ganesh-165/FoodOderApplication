const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const sequelize =require('./database/connection');
const user = require('./models/usermodel');
const items = require('./models/itemsmodel');
const useroders = require('./models/useroders');
const oderitem = require('./models/odersitems');
const router = require('./router/router');
const { corsOptions } = require("./config/corsOptions");
const { credentials } = require("./middleware/credentials");
require('dotenv').config();

const app = express();

app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:false}),express.json());


sequelize.sync().then(()=>{
    console.log('table Created');
})
.catch(err => console.log(err));


app.use('/',router);


app.listen(5000,()=>console.log('serever listening'))
