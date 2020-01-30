fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let start = true;
let message = "";
while(start){
readline.question('Typ iets:', (message)=>{
fs.writeFile('message.txt',message,'utf8', ()=>{
  console.log('gedaan');
})
fs.readFile('message.txt', (err,data)=>{
  console.log("Error is " + err);
  console.log(data);
})});

start = false;
