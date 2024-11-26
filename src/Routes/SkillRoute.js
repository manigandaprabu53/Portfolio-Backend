import express from 'express';
import SkillController from "../Controller/SkillController.js";

const router = express.Router();

router.post("/addSkills", SkillController.addSkills);
router.get("/getSkills", SkillController.getSkills);
router.delete('/deleteSkills', SkillController.deleteSkills);

export default router;