/** @format */

function HashTable() {
  this.table = new Array(137);
  this.value = [];
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.insert = insert;
  this.display = display;
  this.buildChain = buildChain;
  this.insertChain = insertChain;
  this.getChain = getChain;
  this.insertLinearProb = insertLinearProb
  this.getLinearProb = getLinearProb
}

function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  console.log(`Hash value is ${data} : ---> ${total}`);
  return total % this.table.length;
}

function betterHash(data) {
  let pNumber = 31;
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += pNumber * total + data.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  console.log(`Hash value is ${data} : ---> ${total}`);
  return parseInt(total);
}

function insert(data) {
  let position = this.betterHash(data);
  this.table[position] = data;
}

function get(key) {
  return this.table[this.betterHash(key)];
}

function display() {
  let number = 0;
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i][0] !== undefined) {
      console.log(`${i} : ---> ${this.table[i]}`);
    }
  }
}

function randNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateData(array) {
  for (let i = 0; i < array.length; i++) {
    let num = "";
    for (let j = 1; j <= 9; j++) {
      num + Math.floor(Math.random() * 10);
    }

    num += randNumbers(50, 100);
    array[i] = num;
  }
}

// Seperate chaining method to avoid collisions
// you will need to update the display method above so that it can recognize that its a 2D array
function buildChain() {
  for (let i = 0; i < this.table.length; i++) {
    this.table[i] = [];
  }
}

// a new put or insert  method
function insertChain(data) {
  let key = this.betterHash(key);
  let index = 0;
  if (this.table[key][index] === undefined) {
    this.table[key][index] = data;
  } else {
    while (this.table[key][index] !== undefined) {
      ++index;
    }
    this.table[key][index] = data;
  }
}

// new get method
function getChain(key){
    let index = 0;
    let position = this.betterHash(key)
    if(this.table[position][index] === key){
        return this.table[position][index + 1]
    }else{
        while(this.table[position][index]!== undefined){
            index + 2;
        }
        return this.table[position][index + 1]
    }
    return undefined

}



// Linear probing
function insertLinearProb(key, data){
    let position = this.betterHash(key)
    if(this.table[position] === undefined){
        this.table[position] = key
        this.value[position] = data;
    }else{
        while(this.table[position] !== undefined){
            position ++
        }
        this.table[position] = key
        this.value[position] = data;
    }
}

function getLinearProb(key){
    let hash = -1
    hash = this.betterHash(key)
    if(has > -1){
        for(let i = hash ; this.table[hash] !== undefined; i++){
            if(this.table[hash]=== key){
                return this.value[hash]
            }
        }
    }
    return undefined
}


const hashT = new HashTable();

const names = [
  "ram",
  "sam",
  "peter",
  "john",
  "tracy",
  "david",
  "oscar",
  "penny",
  "olivia",
];

// Two loops to create a collision and these collisions will be handle by the chaining methods above
for (let i = 0; i < names.length; i++) {
  hashT.insert(names[i]);
}

for (let i = 0; i < names.length; i++) {
    hashT.insertLinearProb(names[i]);
  }

hashT.buildChain()

hashT.display();

const numStudents = 5;
const arraySize = 97;
const idLength = 9;
const students = new Array(numStudents);
generateData(students);

console.log("----- student data ------: \n");

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].substring(0, 8)}  ${students[i].substring(9)}`);
}

console.log("\n\n ------ student data ------: \n");
for (let i = 0; i < students.length; i++) {
  hashT.insert(students[i]);
}
hashT.display();
