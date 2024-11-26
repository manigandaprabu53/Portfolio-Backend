import mongoose from "./index.js";

const experienceSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "Experience title required"]
        },
        description:{
            type: String,
            required: [true, "Experience description required"]
        }
    },
    {
        collection: "Experience",
        versionKey: false
    }
)

export default mongoose.model("Experience", experienceSchema)