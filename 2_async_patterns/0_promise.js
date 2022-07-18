const { readFile } = require("fs") 
 
const getText = (path) => { 
    return new Promise((resolve, reject) => {  
        readFile(path, 'utf8', (err, data) => {  
            if (err) { 
                reject(err) 
            }else{ 
                resolve(data)
            }
        }) 

    })
} 
 


getText('./content/firstt.txt') 
    .then((result) => {console.log(result)}) 
    .catch((error) => {console.log(error)})  
 
    
//promise can have three results 
//1. undefined 
//2. a result value 
//3. an error object 
 

//promise can have three states 
//1. pending 
//2. fullfilled 
//3. rejected
 


