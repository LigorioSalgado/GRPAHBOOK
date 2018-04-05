import mongoose from 'mongoose';

const Schema = mongoose.Schema

const BookSchema = new Schema({

    'name':{
        type:String,
        require:true
    },
    'prologue':{
        type:String,
        require:true,
    },
    'isbn':{
        type:String
    },
    'num_pages' : {
        type:Number
    },

    'cover':{
        type:String
    },
    
    'autor':{ 
        type: Schema.Types.ObjectId, 
        ref: 'author' }
    


},{'collection':'book',timestamps:true})

export default mongoose.model('book',BookSchema);