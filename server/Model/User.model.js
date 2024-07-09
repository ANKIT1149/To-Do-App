import mongoose from "mongoose";

const Usermodel = new mongoose.Schema({
     todoUser: {
         type: String,
         require: true,
         unique: true
     },

     todoemail: {
         type: String,
         require: true,
         unique: true,
     },

     todoPassword: {
        type: String,
        require: true
     }
});

const ToDousers = mongoose.model('todouser', Usermodel);

export default ToDousers;