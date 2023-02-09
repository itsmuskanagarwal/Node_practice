//import file module
const fs = require("fs");

// //creating a file name "read.txt" and adding some data in it
// fs.writeFileSync("read.txt", "this is text in the read.txt file" ); 

// // fs.writeFileSync("read.txt", "this is text in the read.txt file. Made by Muskan" ); => this will overwrite

fs.appendFileSync("read.txt"," Add more data in a file"); //add more data without overwrite

const buff_data = fs.readFileSync("read.txt"); // buff_data will contain buffer data. 

//to get data from file
data = buff_data.toString();
console.log(data);


