import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull

    } from 'graphql';

    import Author from '../../schemas/Authors';
    import { AuthorType } from '../types/Authors';
    
    const AuthorAll =  {
        type: new GraphQLList(AuthorType),
        resolve(){
            const authors = Author.find().exec();
            if(!authors){
                throw new Error("Error while fetching characters");
            }
            return authors;
        }
    }

    const AuthorSingle =  {
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

    export default {
        AuthorAll,
        AuthorSingle
    }