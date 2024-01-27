var Express=require("express");
var MongoClient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());


var CONNECTION_STRING="mongodb+srv://Sowmya:<Mydateis14>@cluster0.gtpforf.mongodb.net/?retryWrites=true&w=majority"

var DATABASENAME="todoappdb";
var datbase;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(5038,()=>{
    MongoClient.connect(CONNECTION_STRING,(error,client)=>{
        datbase=client.db(DATABASENAME);
        console.log("Mongo DB connection is successful");
    })
})
