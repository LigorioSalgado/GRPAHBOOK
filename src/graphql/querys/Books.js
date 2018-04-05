import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull

    } from 'graphql';

    import Book from '../../schemas/Books';
    import { BookType } from '../types/Books';
    
    const BookAll =  {
        type: new GraphQLList(BookType),
        resolve(){
            const authors = Book.find().exec();
            if(!authors){
                throw new Error("Error while fetching characters");
            }
            return authors;
        }
    }

    const BookSingle =  {
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

    export default {
        BookAll,
        BookSingle
    }