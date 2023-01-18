import express from 'express'

import postgresClient from './config/db.js'
import userRouter from './routers/userRouter.js'
import cors from 'cors'

import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(cors());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/users', userRouter)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    postgresClient.connect(err => {
        if(err) {
            console.log('connection error', err.stack)
        }else {
            console.log('db connection successful')
        }
    })
})

