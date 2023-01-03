const mongoose=require("mongoose")

const User=mongoose.model("User",{
    fname: {
        type: String,
        required: true,
        trim: true,

    },

    sname:{
        type: String,
        required: true,
        trim: true
    },

    city:{
        type: String,
        required: false,
        trim: true,
    },

    date:{
        type: String,
        required: false,
        trim: true
    },
    phone:{
        type: Number,
        required: true,
        trim: true
    },

    guests:{
        type: Number,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required: false,
        trim: false,
    },
    
    subject:{
        type: String,
        required: false,
        trim: true,
    }

});

module.exports  = User;