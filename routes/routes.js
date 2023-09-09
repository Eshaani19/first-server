//for postman
//postman allows us to test our backend
/*const router = require("express").Router();
//req is what u get
//res is what u send
router.get("/ping",(req,res) => {
    //res.send("pong");
    res.json({Response: "pong"});
});
router.post("/pong", (req,res)=> {
    const request = req.body;
    //res.json(request);
    //below statement checks if a key in the key value pairs has ping
    if(request.ping){
        res.json(request);
    }
    else{
        res.status(400).json({Error: "Not allowed"});

    }
});
router.patch("/pingpong",(req,res)=> {
    const request = req.body;
    //below statments says if there's an id 'ping' it will send response
    if (request._id == "ping"){
        res.json({"Response": "Pong"});
    }
    else {
        res.status(400).json({Error: "Not allowed"});
    }
});
module.exports = router;
//json is used to send data that is structured
*/