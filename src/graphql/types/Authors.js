import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLID
} from 'graphql'

import Autor from '../../schemas/Authors';
import Book from '../../schemas/Books';



const AuthorType = new GraphQLObjectType({
    name:"Authors",
    description:"Authors in the DB",
    fields : () => ({
        
        _id:{
            type: new GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        },
        nationality:{
            type:GraphQLString
        },
        is_alive:{
            type:GraphQLBoolean
        },
        biography:{
            type:GraphQLString
        },
        image :{
            type:GraphQLString
        },
        books: {
            type: new GraphQLList(),
            resolve(author){
                const {_id} = author
                return Book.find({author:_id}).exec()
            }

        }
    })
})

const AuthorInputType =  new GraphQLInputObjectType({
    name:"Author add",
    description:"Adds a new Author",
    fields : () => ({
        
        _id:{
            type: new GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        },
        nationality:{
            type:GraphQLString
        },
        is_alive:{
            type:GraphQLBoolean
        },
        biography:{
            type:GraphQLString
        },
        image :{
            type:GraphQLString
        }
    })


})

export default {
    AuthorType,
    AuthorInputType
}