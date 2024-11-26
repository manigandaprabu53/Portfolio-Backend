import mongoose from './index.js';

const projectSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "Project Title required"]
        },
        description: {
            type: String,
            required: [true, "Project Description required"]
        },
        github: {
            type: String,
            required: [true, "Github URL required"]
        },
        livePage: {
            type: String,
            required: [true, "LivePage URL required"]
        },
        thumbnail: {
            type: String,
            required: [true, "Thumbnail required"]
        }
    },
    {
        collection: "Projects",
        versionKey: false
    }
)

export default mongoose.model("Projects", projectSchema);