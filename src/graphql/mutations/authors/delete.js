import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {AuthorType, AuthorInputType} from '../../types/Authors';
import Author from '../../../schemas/Authors'



export default{

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




