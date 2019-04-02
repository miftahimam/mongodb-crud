const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'book'
const client = new MongoClient(url,{useNewUrlParser : true})

class Book {

    static create(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const bookCollection = db.collection('kitab')

            bookCollection
             .insertOne({
                 _id : req.body._id,
                 isbn : req.body.isbn,
                 title : req.body.title,
                 author : req.body.author,
                 category : req.body.category,
                 stock : req.body.stock
             }, function(err, r){
                 if(err){
                     res.status(500).json(err)
                     client.close()
                 } else {
                     res.status(200).json('sukes masukan data')
                     client.close()
                     
                 }
             })

        }); 
    }
    static update(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const bookCollection = db.collection('kitab')

            bookCollection
             .updateOne({_id : req.body._id}, {$set :{title : req.body.title}}, function(err, r){
                 if(err){
                     res.status(500).json(err)
                     client.close()
                 } else {
                     
                         res.status(200).json('updated successfully')
                         client.close()
                
                 }

             }) 
        });
    }
    static read(req,res){

        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');

            const db = client.db(dbName)
            const bookCollection = db.collection('kitab')

            bookCollection
            .find({})
            .toArray(function(err,doc){
                if(err){
                    res.status(401).json({err : err})
                    client.close()
                } else {
                    res.status(201).json(doc)
                    client.close()
                }
            })
        });
    }
    static delete(req,res){
        MongoClient.connect(url,function(err,client){
            console.log('connected successfully');
            
            const db = client.db(dbName)
            const bookCollection = db.collection('kitab')

            bookCollection
             .deleteOne({_id : req.body._id}, function(err,result){
                 if(err){
                     res.status(500).json(err)
                     client.close()
                 } else {
                     res.status(200).json('deleted success')
                     client.close()
                 }
             })
        });
    }
    
}

module.exports = Book
