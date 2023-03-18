const mongoose = require("mongoose");
const schema = mongoose.schema;


const UserSchema = new schema({
    name: {},
    password: {},
    email:{},
    gender: {},
    phoneNo:{}
})