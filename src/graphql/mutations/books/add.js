import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {BookType, BookInputType} from '../../types/Books';
import Book from '../../../schemas/Books';

export default {
    type: BookType,
    args: {
        data:{
            name:'data',
            type: new GraphQLNonNull(BookInputType)
        }
    },
    resolve(root, params){
        const book = new Book(params.data);
        const newBook = book.save();
        if(!newBook){
            throw  new Error ('Error adding an author');
        }
        return newBook
    }
}

