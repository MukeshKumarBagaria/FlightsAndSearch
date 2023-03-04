const express=require('express');
const bodyParser=require('body-parser');
const setupAndStartServer= async () => {
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(3000 , async()=>{
        console.log(`server started on port 3000`);
       
    })  
}   


setupAndStartServer();