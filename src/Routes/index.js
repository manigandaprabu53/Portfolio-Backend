import express from 'express';
import DataRoutes from './DataRoutes.js';
import ExperienceRoute from './ExperienceRoute.js';
import SkillRoute from './SkillRoute.js';
import ProjectRoute from './ProjectRoute.js';

const router = express.Router();

router.use('/data', DataRoutes);
router.use('/experience', ExperienceRoute);
router.use('/skills', SkillRoute);
router.use('/projects', ProjectRoute);

export default router;