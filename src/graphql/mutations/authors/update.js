import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {AuthorType, AuthorInputType} from '../../types/Authors';
import Author from '../../../schemas/Authors'



export default {
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
