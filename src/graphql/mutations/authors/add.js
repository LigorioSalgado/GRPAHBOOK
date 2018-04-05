import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {AuthorType, AuthorInputType} from '../../types/Authors';
import Author from '../../../schemas/Authors'


export default {
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

