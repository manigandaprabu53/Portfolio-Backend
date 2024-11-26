import express from 'express';
import DataController from '../Controller/DataController.js';

const router = express.Router();

router.post('/aboutMe', DataController.addData);
router.get('/getAboutMe', DataController.getData);


export default router;