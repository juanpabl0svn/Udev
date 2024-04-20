// Commonly use express
import express from express;

//You should have a file with the .env to save important data (passwords, ports, links, etc) and other file to read it named config.js
import {PORT} from "./config.js";

//If you want to consume this server from another server, you should install cors
import cors from "cors";

//Configuration

//Create the server
const app = express();

//Be able to read the body of the request
app.use(express.json());

//Be able to read the url parameters
app.use(express.urlencoded({ extended: true }));

//With this your server will have a header that will allow the other server to consume your server
//You can configure it to allow only some servers (* for everyone, or the IP of the servers that you want to consume this)
//In this case we use *
app.use(cors({origin: '*'}))


//Route
app.get('/', (req,res,next)=> {})
app.post('/', (req,res,next)=> {})
app.put('/', (req,res,next)=> {})
app.delete('/', (req,res,next)=> {})

//You should have other files with routers, they should be this way

import {Router} from 'express'

const router = Router();

router.get('/', (req,res,next)=> {})

export default router;

//And then in this file, import this router

import exampleRouter from './example.js'

//The first parameter is optional, if you put it, it will be the first part of the url
app.use('/example', exampleRouter)


//Start the server
//The first parameter is the port where the server will be listening, and the second is a function that will be executed when the server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})








