import * as http from 'http'

console.log(http.METHODS)
const server = http.createServer((req, res) => {    
    if (req.url === '/'){ 
        res.end('welcome to home')
    } 
    if (req.url === '/about'){ 
        res.end('this is the aaaabout')
    } 
    res.end(` 
    <h1>OOOOPS</h1> 
    <p>jhgghgjhjjh</p> 
    <a href="/"> back home</a>`
    )
}) 
 
server.listen(5000)