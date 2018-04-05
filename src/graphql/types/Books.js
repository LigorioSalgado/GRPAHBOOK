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
import {AuthorType} from './Authors'

console.log(AuthorType)

const BookType = new GraphQLObjectType({
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
        author:{
            type:AuthorType,
            resolve(book){
                const {author} = book
                return Author.findById(author).exec()
            }
        }

    })
})


const BookInputType = new GraphQLInputObjectType({
    name:"AddBooks",
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


export  {
    BookType,
    BookInputType

}