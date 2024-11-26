import express from "express";
import ProjectController from "../Controller/ProjectController.js";

const router = express.Router();

router.post('/addProject', ProjectController.addProject);
router.get('/getProjects', ProjectController.getProjects);

export default router;