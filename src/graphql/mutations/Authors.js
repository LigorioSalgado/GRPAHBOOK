import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {AuthorType, AuthorInputType} from '../types/Authors';
import Author from '../../schemas/Authors'


const addAuthor =  {
    type: AuthorType,
    args: {
        data:{
            name:'data',
            type: new GraphQLNonNull(AuthorInputType)
        }
    },
    resolve(root, params){
        const author = new Author(params.data);
        const newAuthor = author.save();
        if(!newAuthor){
            throw  new Error ('Error adding an author');
        }
        return newAuthor
    }
}

const updateAuthor = {
    type: AuthorType,
    args: {
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(AuthorInputType)
        }
    },
    resolve(root,params){
        return Author.findByIdAndUpdate(params.id,{$set:{...params.data}})
            .then(data => Author.findById(data.id).exec())
            .catch(err => new Error ('Couldnt upddate author data',err))
    }
};


const removeAuthor = {

    type: AuthorType,
    args: {
        id: {
            name:'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedAuthor= Author.findOneAndRemove(params.id).exec()
        if(!removedAuthor){
            throw new Error ('Error removing author');
        }
        return removedAuthor;
    }


};


export default {

    addAuthor,
    updateAuthor,
    removeAuthor,
}

