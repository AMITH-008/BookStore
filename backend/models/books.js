import mongoose from "mongoose";


const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishYear:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});


const Book =  mongoose.Model('Book', BookSchema);

export default Book;