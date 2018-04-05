import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull

    } from 'graphql';

    import Book from '../../../schemas/Books';
    import { BookType } from '../../types/Books';
    
    export default {
        type:BookType,
        args:{
            id:{
            name: 'ID',
            type:new GraphQLNonNull(GraphQLID)
             }
              
        },
        resolve(root, params){
            return Book.findById(params.id).exec();
        }

    }

    