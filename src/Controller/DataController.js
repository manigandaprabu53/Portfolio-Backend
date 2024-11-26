import DataModel from "../Model/DataModel.js";

const addData = async (req, res)=>{
    try{
        const {firstName, lastName, email, stack, aboutMe, image, resume} = req.body;
        await DataModel.deleteMany();
        let data = await DataModel.create(req.body);
        res.status(201).send({message: "AboutMe data created successfully", data: data})

    }catch(error){
        res.status(500).send({message: "Internal server error", error: error})
    }
}

const getData = async (req, res)=>{
    try {
        let data = await DataModel.find();
        res.status(200).send({message: "Data fetched successfully", data: data});
    } catch (error) {
        
    }
}

export default {
    addData,
    getData
}