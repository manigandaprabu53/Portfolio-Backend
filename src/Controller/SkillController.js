import SkillModel from '../Model/SkillModel.js';

const addSkills = async (req, res) => {
    try {
        let del = await SkillModel.deleteMany();
        console.log("delete command: "+del)
        console.log(req.body)
        let data = await SkillModel.create(req.body);
        res.status(201).send({message: "Skills are saved", data: data});
    } catch (error) {
        res.status(500).send({message: "Internal server error", error: error})
    }
}

const getSkills = async (req, res) => {
    try {
        let data = await SkillModel.find();
        if(data){
            res.status(200).send({message: "Skills Fetched", data: data});
        }else{
            res.status(400).send({message: "Skills Not Updated"});
        }
    } catch (error) {
        res.status(500).send({message: "Internal server error" || error})
    }
}

const deleteSkills = async (req, res)=>{
    try {
        let del = await SkillModel.deleteMany({});
        res.status(200).status({message: "Data Deleted"})
    } catch (error) {
        res.status(500).send({message: "Internal server error",error: error})
    }
}

export default{
    addSkills,
    getSkills,
    deleteSkills
}