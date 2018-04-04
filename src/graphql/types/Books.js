import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} from 'graphql'

import Book from '../../schemas/Books';
import Author  from '../../schemas/Authors';
import AuthorType from './Authors'

const BookType = new GraphQLInputObjectType({
    name:"Books",
    description:"Books in the database",
    fields: () => ({

        name:{
            type:GraphQLString
        },
        prologue:{
            type:GraphQLString
        },

        isbn:{
            type:GraphQLString
        },
        num_pages : {
            type:GraphQLInt
        },
        cover:{
            type:GraphQLString
        },
        autor:{
            type:AuthorType,
            resolve(book){
                const {author} = book
                return Author.findById(author).exec()
            }
        }

    })
})


const BookInputType = new GraphQLInputObjectType({
    name:"Add Books",
    description:"Add new books",
    fields: () => ({

        name:{
            type:GraphQLString
        },
        prologue:{
            type:GraphQLString
        },

        isbn:{
            type:GraphQLString
        },
        num_pages : {
            type:GraphQLInt
        },
        cover:{
            type:GraphQLString
        }
    })

})


export default {
    BookType,
    BookInputType

}