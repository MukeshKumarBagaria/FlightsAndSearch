const express=require('express');
const bodyParser=require('body-parser');
const CityRepository=require('./repository/city-repository');
const setupAndStartServer= async () => {
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(3000 , async()=>{
        console.log(`server started on port 3000`);
       const repo=new CityRepository();
        repo.CreateCity({name:"nalanda"})
    
    })  
}   


setupAndStartServer();