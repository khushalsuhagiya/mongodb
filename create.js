/*
    create database
     use db_name

     create collection
     db.createColletion('name')

     show collections -> list of all collections


     db.books.insertOne({
        title: "Javascript Complete Refernce Book",
        pages: 800,
        price: 199,
        auther: "SkillQode"
     })
     
     db.books.insertOne({
        title: "Java Complete Refernce Book",
        pages: 800,
        price: 199,
        auther: "SkillQode",
        content: ['index', 'introduction of java'],
        test: {
            abc: 'XYZ'
        }
     })


     db.books.insertMany([
        {
           title: "MySQL Book",
            pages: 500,
            price: 249,
            auther: "John Peter" 
        },
        {
            title: "MongoDB Database Book",
            pages: 890,
            price: 249,
            auther: "Bhavik Cobra"
        },
        {
            title: "C Programming Book",
            pages: 190,
            price: 649,
            auther: "SkillQode"
        },
        {
            title: "C++ Programming Book",
            pages: 490,
            price: 549,
            auther: "SkillQode"
        }
     ])


db.books.updateOne({title: "Java Complete Refernce Book"},
{
  $push :{  content : 690 }
},
  {
     upsert:true
  })
*/




/*
(2) client_master

db. client_master.insertOne({
    clientNo  :0001,
    name : "khushal suhagiya",
    address1 : "gujrat",
    city :"surat"
})

  db.Products.insertMany([
        {
        PROCUCTNO     : 1,
        DESCRIPTION   : "t-shirt",
        PROFITPERCENT : 5,
        UNITMEASURE   : "piece",
        QTYONHAND     : 200,
        REORDERLVL    : 5,
        SELLPRICE     : 100,
        COSTPRICE     : 50
        },
        {
        PROCUCTNO     : 2,
        DESCRIPTION   : "shirt",
        PROFITPERCENT : 4,
        UNITMEASURE   : "piece",
        QTYONHAND     : 500,
        REORDERLVL    : 20,
        SELLPRICE     : 100,
        COSTPRICE     : 500
        },
        {
        PROCUCTNO     : 3,
        DESCRIPTION   : "cotton jean",
        PROFITPERCENT : 7,
        UNITMEASURE   : "piece",
        QTYONHAND     : 800,
        REORDERLVL    : 50,
        SELLPRICE     : 100,
        COSTPRICE     : 450
        },
        {
        PROCUCTNO     : 4,
        DESCRIPTION   : "jeans",
        PROFITPERCENT : 10,
        UNITMEASURE   : "piece",
        QTYONHAND     : 300,
        REORDERLVL    : 90,
        SELLPRICE     : 100,
        COSTPRICE     : 250
        }
     ])
    
*/ 