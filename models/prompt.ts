import mongoose, {model, models, Schema} from "mongoose";

const promptSchema = new Schema({
    creator : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    prompt : {
        type : String,
        required : [true, 'Prompt is required']
    },
    tag : {
        type : String,
        required : [true, 'Tag is required']
    }
})

// in next js this calls again when the function is called so check if prompt already exists
const Prompt = models?.Prompt || model("Prompt", promptSchema);
export default Prompt;