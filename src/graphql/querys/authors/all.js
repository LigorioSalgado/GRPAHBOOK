import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull

    } from 'graphql';

    import Author from '../../../schemas/Authors';
    import { AuthorType } from '../../types/Authors';
    
    export default {
        type: new GraphQLList(AuthorType),
        resolve(){
            const authors = Author.find().exec();
            if(!authors){
                throw new Error("Error while fetching characters");
            }
            return authors;
        }
    }