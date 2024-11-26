import mongoose from './index.js';

const AboutMeSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Name is required"]
        },
        lastName: {
            type: String,
            required: [true, ["Last name is required"]]
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        },
        stack: {
            type: String,
            required: [true, "Stack is required"]
        },
        image: {
            type: String,
            required: [true, "Image is required"]
        },
        resume: {
            type: String,
            required: [true, "Resume is required"]
        },
        aboutMe: {
            type: String,
            required: [true, "AboutMe is required"]
        }
    },
    {
        collection: "AboutMe",
        versionKey: false
    }
)

export default mongoose.model("AboutMe", AboutMeSchema)