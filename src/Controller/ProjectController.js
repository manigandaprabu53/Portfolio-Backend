import ProjectModel from "../Model/ProjectModel.js";

const addProject = async (req, res)=>{
    try {
        let data = await ProjectModel.create(req.body);
        if(res){
            res.status(201).send({message: "Project Data Saved", data: data})
        }else{
            res.status(400).send({message: "Project Data Saved"});
        }
    } catch (error) {
        res.status(500).send({message: "Internal Server Error", error: error});
    }
}

const getProjects = async (req, res)=>{
    try {
        let data = await ProjectModel.find();
        if(data){
            res.status(200).send({message: "Projects Fetched", data: data});
        }else{
            res.status(400).send({message: "No Projects Found"});
        }
    } catch (error) {
        res.status(500).send({message: "Internal Server Error", error: error});
    }
}

export default {
    addProject,
    getProjects
}