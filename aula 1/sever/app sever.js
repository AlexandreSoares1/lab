const http = require ('http');

const json = {
    "content-type" : "text/html"
}

const requisicao= function(request, response){
    response.writeHead(200, json);
    response.write("<h1>Bem vindo ao nosso HTTP sever</h1>");
    response.end();
}

const server = http.createServer(requisicao);
server.listen(3000, function(){
    console.log("servidor no ar")
});
