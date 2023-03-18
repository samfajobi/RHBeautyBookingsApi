import mongoose from "mongoose";

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {type: String, required:true},
    password: { type: String, required:true},
    email:{ type: String, required: true},
    gender: { type: String},
    phoneNo:{ type: String},
    hairstyle:{ type: String},
    nails:{type: String},
    eye_lashes:{type: Boolean},
    ped_man:{ type: Boolean},
})


module.exports = mongoose.model("Users", UserSchema);