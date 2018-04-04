import mongoose from 'mongoose';

const Schema = mongoose.Schema()



const AuthorSchema = new Schema({

    'name':{
        type:String,
        require:true
    },

    'age':{
        type:Number,
        require:true,
    },

    'nationality':{
        type:String
    },

    'is_alive':{
        type:Boolean
    },
    'biography':{
        type:Text
    },
    'image':{
        type:String
    }


},{'collection':'author',timestamps:true})

export default mongoose.model('author',AuthorSchema)