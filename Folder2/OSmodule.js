import os from 'os' 
import { capitalize } from "../Folder1/1.intro.js" 
import { person1 } from "../Folder1/1.new.js"   

const user =os.userInfo 
const currentOS = { 
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(), 
    freeMem: os.freemem()
}   
console.log(user)
console.log(os.uptime())   
console.log(currentOS)

