import mongoose from "./index.js";

const skillSchema = new mongoose.Schema(
    {
        icons: {
            type: [String],
            required: [true, "Skills are required"]
        }
    },
    {
        collection: "Skills",
        versionKey: false
    }
)

export default mongoose.model("Skills", skillSchema);