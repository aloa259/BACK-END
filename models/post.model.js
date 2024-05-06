const mongoose  = require("mongoose");

const schema = new mongoose.Schema({
    id: {
        type: String 
    },
    //createdAt: Date,
    //updatedAt: Date,
    title: { 
        type: String, 
        required: true, 
        minLength: 10 
    }, 
    text: { 
        type: String, 
        required:true, 
        minLength:8
    }, 
    author: { 
        type: String, 
        required:true
    },
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) =>{
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

const Post = mongoose.model("Post", schema);
module.exports = Post;