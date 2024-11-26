import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import AppRoutes from './src/Routes/index.js'
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}))
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}))
app.use(AppRoutes);

app.listen(8000, console.log("App is listening on port 8000"));