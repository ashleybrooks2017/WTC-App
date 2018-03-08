
//create the server for browser access
const server = http.createServer((req, res)=>{
    setResHtml(sql, resql=>{
      reo = reo.replace('{${table}}', resql);
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      res.write(reo, 'utf-8');
      res.end();
    });
  });
  
  server.listen(8080, ()=>{
    console.log('Server running at //localhost:8080/');
  });