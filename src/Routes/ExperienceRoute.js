import express from 'express';
import ExperienceController from '../Controller/ExperienceController.js';

const router = express.Router();

router.post('/addExperience', ExperienceController.addExperience);
router.get('/getExperience', ExperienceController.getExperience);

export default router;