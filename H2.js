/** @format */

const fsLibrary = require("fs");

// data to add in file
let data = [
  "a customary way of operation or behavior",
  "have in mind as a purpose",
];

// write data in a new text file
// 3 params, Path, Data, Callback
fsLibrary.writeFile("newfile.txt", data, (error) => {
  if (error) {
    throw error;
  }
});

console.log(data);

// readFile
// 3 params Path, Option and Callback

fsLibrary.readFile("newfile.txt", (error, txtString) => {
  for (let key in data) {
    let value = data[key];
    return value;
  }

  if (error) {
    throw error;
  }
  console.log(txtString.toString());
});



