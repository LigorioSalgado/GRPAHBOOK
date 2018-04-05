import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {BookType, BookInputType} from '../../types/Books';
import Book from '../../../schemas/Books';



export default {
    type: BookType,
    args: {
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(BookInputType)
        }
    },
    resolve(root,params){
        return Book.findByIdAndUpdate(params.id,{$set:{...params.data}})
            .then(data => Book.findById(data.id).exec())
            .catch(err => new Error ('Couldnt upddate book data',err))
    }
};
