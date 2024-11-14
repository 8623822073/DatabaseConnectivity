const http=require("http");
const {Pool}=require("pg");
const {host,databse,password}=require("pg/lib/defaults");

const db=new  Pool({
    user:"laxmanrock",
    host:"localhost",
    database:"LaxmanDatabase",
    password:"telange",
    port:5432,
}); 
async  function getMenuList(req,res){
    try{
    const result =await db.query("SELECT * FROM hotel_menu");
    res.end(JSON.stringify(result.rows));
    console.log("hotel",result.rows);   
}catch(err){
    console.log(err);
    console.log("error in query",err);
    res.end("menu list not foind");
}
}


const server=http.createServer((req,res)=>{
    if(req.url==="/hel"){
    getMenuList(req,res);
    }else{
        res.writeHead(404, `Content-Type:text/plain`);
        res.end("404 Not Found");
    }
});
server.listen(2000,"127.0.0.1",()=>{
    console.log("Server is running on port 2000");
})
    

    
