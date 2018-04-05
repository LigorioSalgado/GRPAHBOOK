import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull

    } from 'graphql';

    import Book from '../../../schemas/Books';
    import { BookType } from '../../types/Books';
    

    export default  {
        type: new GraphQLList(BookType),
        resolve(){
            const authors = Book.find().exec();
            if(!authors){
                throw new Error("Error while fetching characters");
            }
            return authors;
        }
    }