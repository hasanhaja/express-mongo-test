# Express Mongo Test

This project is a part of my learning of CRUD application development. For this project, I followed the first part of [this](https://zellwk.com/blog/crud-express-mongodb/) tutorial. This is an `ExpressJS` application with `MongoDB` as the database.

## Usage

Since this is a NodeJS project, you will need to have NodeJS installed. Also ensure you have MongoDB installed or have access to a cloud-based alternative. Then you would replace the url from:

```javascript
MongoClient.connect("mongodb://localhost:27017/express-mongo-test", (err, client) => {
   // -- snip --
})
```
To:
```javascript
MongoClient.connect("<your mongodb url here>", (err, client) => {
    // -- snip --
})
```

To run the application, first download all dependencies using
```
npm install
```
Then to actually run the application, you either:
```
node server.js
```
Or
```
npm run dev
```
The latter will trigger `nodemon server.js` and this is useful if you plan on making changes to the project. Nodemon will automatically restart the server on save.

You can stop the server using `CTRL+C`.

## Future plan

I plan on implementing a similar application in `Kotlin`. I am yet to decide on `KotlinJS` (so I can use the same tools and libraries as I've used here) or `KotlinJVM`.

## Maintenance

Since this was for learning, I have no plans of maintaining this project beyond this point.
