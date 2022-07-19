setInterval(() => {
  console.log("hello world");
}, 2000); 
console.log("i will run first")
//process stays alive unless 
//kill process using ctrl + c 
//every time we have an asynchronous action it is going to be offloaded. 