import { Schema, model, models } from "mongoose";
import Email from "next-auth/providers/email";

const userSchema = new Schema({
    email : {
        type : String,
        unique : [true, 'Email already exists'],
        required : [true, 'Email is required']
    },
    username : {
        type : String,
        required : [true, 'Username is required']
    },
    image : {
        type: String,
    }
})

// in next js this calls again when the function is called so check if user already exists
const User = models?.User || model("User", userSchema);
export default User;