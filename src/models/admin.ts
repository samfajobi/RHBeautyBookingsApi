import mongoose from "mongoose";

const Schema = mongoose.Schema

const adminSchema = new Schema({
    first_name: {type: String},
    last_name:{ type: String},
    email:{ type: String},
    password:{ type: String},
    user_type:{ type: String},
})

const adminModel = mongoose.model("adminModel", adminSchema)
module.exports = adminModel