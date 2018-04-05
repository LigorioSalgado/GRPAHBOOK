import mongoose from 'mongoose';

const Schema = mongoose.Schema()

const BookSchema = new Schema({

    'name':{
        type:String,
        require:true
    },
    'prologue':{
        type:Text,
        require:true,
    },
    'isbn':{
        type:String
    },

    'cover':{
        type:String
    },
    
    'author':{ 
        type: Schema.Types.ObjectId, 
        ref: 'author' }
    


},{'collection':'book',timestamps:true})

export default mongoose.model('book',BookSchema)