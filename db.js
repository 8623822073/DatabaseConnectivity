const http=require("http");
const {Pool}=require("pg");
const { host, database, password } = require("pg/lib/defaults");

const db=new Pool(
    {
        user:"laxmanrock",//user
        host:"localhost",//host
        database:"LaxmanDatabase",//
        password:"telange",
        port:5432,
    }
);
async function getMenuList(req, res) {
    try {
      const result = await db.query("SELECT * FROM hotel_menu");
      res.end(JSON.stringify(result.rows)); // Send JSON response
      console.log("HOTEL:", result.rows);   // Output the result
    } catch (err) {
      console.error("Error in query:", err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("Error in fetching menu list.");
    }
  }
  
  // Create the server
  const server = http.createServer((req, res) => {
    if (req.url === "/menu") {
      getMenuList(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end("Menu not found.");
    }
  });
  



server.listen(4000,"127.0.0.1",()=>{
    console.log("server is running on port 4000");
})

