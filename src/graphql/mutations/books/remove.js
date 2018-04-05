import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {BookType, BookInputType} from '../../types/Books';
import Book from '../../../schemas/Books';


 export default{

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

