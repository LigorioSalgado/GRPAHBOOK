import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull

    } from 'graphql';

    import Author from '../../../schemas/Authors';
    import { AuthorType } from '../../types/Authors';
    

    export default{
        type:AuthorType,
        args:{
            id:{
            name: 'ID',
            type:new GraphQLNonNull(GraphQLID)
             }
              
        },
        resolve(root, params){
            return Author.findById(params.id).exec();
        }

    }