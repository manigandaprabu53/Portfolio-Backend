import ExperienceModel from '../Model/ExperienceModel.js'

const addExperience = async (req, res)=>{
    try {
        const {title, description} = req.body;
        let data = await ExperienceModel.create(req.body);
        res.status(201).send({message: "Experience data created", data: data});
    } catch (error) {
        res.status(500).send({message: "Internal server error" || error})
    }
}

const getExperience = async (req, res) =>{
    try {
        let data = await ExperienceModel.find();
        if(data){
            res.status(200).send({message: "Experience data found", data: data});
        }else{
            res.status(500).send({message: "No Experience Data Found"});
        }
    } catch (error) {
        res.status(500).send({message: "Internal server error" || error})
    }
}

export default{
    addExperience,
    getExperience
}