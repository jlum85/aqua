
require('dotenv').config();
//const cors = require('cors');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
//app.use(cors())
app.use(express.json());

const routes = require('./routes/routes.js');


app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})