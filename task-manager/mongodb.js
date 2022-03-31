const res = require('express/lib/response')
const { Db } = require('mongodb')
const { MongoClient, mongodb, ObjectID, ObjectId } = require('mongodb')
const mongoose = require('mongoose');

const connectionURL = "mongodb://localhost:27017"
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }


    const db = client.db(databaseName)
    /*how tow search some one a person basically one with property
    db.collection('users').findOne({'_id': new ObjectId("62436fe649dbbcd8c32aebe1")}, (error, user) => {
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })*/

    db.collection('users').find({ description: 'Clean the house'}).toArray((error, response) => {
        if(error){
            console.log(error)
        }
        console.log(response)
    })

    /*How to search a specific data in a collections and take all if have that equal informatino */
    // db.collection('users').find({ description: 'Clean the house'}).count((error, response) => {
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(response)
    // })

    /*How to search a data with specific details in User Collections
    db.collection('users').findOne({ '_id': new ObjectId('62436fe649dbbcd8c32aebe3')}, (error, response) => {
        if(error){
            console.log(error)
        }
        console.log(response)
    })*/

    /*How to search and show all the data in a Collections
    db.collection('users').find().toArray((error, response) =>{
        if(error){
            console.error(error)
        }

        console.log(response)
    });*/

    /*How to update a row data in collection Users
    const updatePromise = db.collection('users').updateOne({
        "_id" : ObjectId("62436fe649dbbcd8c32aebe3")
    }, {
        $set: {
            description: 'Homework'
        }
    })

    updatePromise.then((result)=> {
        console.log(result)
    }).catch(()=>{
        console.log(error)
    })


    /**How to update a all data */
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.error(error)
    // })

        /**How to insertOne data collection in Users*/
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 28
    // })

    //Multiple data
    // db.collection('users').insertMany([
    //     {
    //     description: 'test',
    //     completed: true
    // }, {description: 'test2',
    //     completed: false,
    //     }, 
    //     {
    //     description: 'test3',
    //     completed: true}], 

    //Una sola data
    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //         if (error) {
    //             return console.error('Unable to insert tasks!')
    //         }

    //         console.log(result)
    //     })

    /* How to eliminate all row in specify details or all the collection users
    db.collection('users').deleteMany({
        completed: true
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.error(error)
    })*/

    /*How to delete a row specify in collection tasks
    db.collection('tasks').deleteOne({ description: 'Clean the house'})
    .then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.error(error)
    })
    */


})

