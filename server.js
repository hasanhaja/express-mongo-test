const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set("view-engine", "ejs");

var db;

MongoClient.connect("mongodb://localhost:27017/express-mongo-test", (err, client) => {
    
    if (err) {
        return console.log(err);
    }
    db = client.db("express-mongo-test");

    app.listen(3000, () => {
        console.log("listening on 3000");
    })
})

app.get("/", (req, res) => {
    let path = __dirname + "/index.html";

    db.collection("quotes").find().toArray((err, result) => {
        
        if (err) {
            return console.log(err);
        }

        res.render("index.ejs", {quotes: result});

    })

    //console.log(path);
    //res.sendFile(path);
})

app.post("/quotes", (req, res) => {
    db.collection("quotes").save(req.body, (err, result) => {
        if (err) {
            return console.log("err");
        }
        console.log("saved to database");
        res.redirect("/");
    })
})