import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList
} from 'graphql'

import Autor from '../../schemas/Authors';
import Book from '../../schemas/Books';

export const AuthorType = new GraphQLObjectType({
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
        photo :{
            type:GraphQLString
        }
    })
})

export const AuthorInputType =  new GraphQLInputObjectType({
    name:"Authoradd",
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

