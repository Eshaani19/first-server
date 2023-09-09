//creating server using http
/*const http = require("http");
http
    .createServer((req,res) => {
        res.write("server is up and running");
        res.end();
    })
    .listen(3000);
*/
//creating server using express
/*const express = require("express");
const app = express();
app.get("/",(req,res) => {
    res.send("Server is up and running");
});
app.listen(3000, () => {
    console.log("Connected to server");
});*/
//creating API
/*
const app = require("express")();
//to post and patch in API
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

app.listen(3000, () => {
    console.log("Connected to server");
});
app.get("/",(req,res) => {
    res.send("Server is up");
});
const routes = require("./routes/routes");
app.use("/routes",routes);
*/
//to post and patch in API
//const bodyParser = require("body-parser");
// app wont work without below 2 lines

//connecting to database
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//mongoose is database connection driver
const mongoose = require("mongoose");
//dotenv module is used to hide the password and connection string
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

mongoose.connect(process.env.DATBASE_URL,{
    usenewURLParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("connected to database"))
.catch((err) => console.log(err));

app.use("/posts",)

app.listen(process.env.PORT, () => {
    console.log("server is running");
});
