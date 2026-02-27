const app = require('./src/app');
const PORT = process.env.PORT || 3000;
const http = require('http');

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})