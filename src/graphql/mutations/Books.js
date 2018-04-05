import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {BookType, BookInputType} from '../types/Books';
import Book from '../../schemas/Book'

const addBook =  {
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

const updateBook = {
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


const removeBook = {

    type: BookType,
    args: {
        id: {
            name:'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedBook= Book.findOneAndRemove(params.id).exec()
        if(!removedBook){
            throw new Error ('Error removing Book');
        }
        return removedBook;
    }


};


export default {

    addBook,
    updateBook,
    removeBook,
}

