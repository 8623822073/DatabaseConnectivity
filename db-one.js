const http=require("http");
const { Pool } = require("pg");
const {host,database,password}=require("pg/lib/defaults");
const db=new Pool(
    {
        user:"laxmanrock",
        host:"localhost",
        database:"LaxmanDatabase",
        password:"telange",
        port:5432,
    }
);
async  function getMenuList(req,res){
    try{
    const result=await db.query("SELECT * FROM hotel_menu");
    res.end(JSON.stringify(result.rows));
    console.log("hotel:-",result.rows);
    }
    catch(err){
        console.log("Error");
        console.error("Error in query:", err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("Error in fetching menu list.");
    }};
const server=http.createServer((req,res)=>{
    if(req.url==="/menu"){
        getMenuList(req,res);

}else{
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end("Page not found");
}});
server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
});







