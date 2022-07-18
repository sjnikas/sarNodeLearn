//node package manager
//local dependancy - use it only in this particular project
//npm i <packageName>

//global dependancy - use it in any project
//npm install --g <packageName>
//sudo install --g <packageName> ...for mac

//package.json -manifest file (stores important info about project/package)
//manaul approach
//npm init (step by step, press enter to skip)
//npm init -y (everything defaultnp)

const loaaaa = require("lodash"); 
const items = [1, [243, [3, [4,[9]]]]];
const newItems = loaaaa.flattenDeep(items);
console.log(newItems);
