const fs = require('fs');
const readline = require('readline');
const dictionary = {};
const _ = require('lodash');

const inputDir = "../rsrc/jobs"

var filenames = fs.readdirSync(inputDir);
filenames.forEach(function(filename){
  let content = fs.readFileSync(inputDir +'/'+ filename).toString()
  content.split(' ').forEach(function(word){
    if (dictionary[word]){
       dictionary[word]+= 1;
    } else {
       dictionary[word] = 1;
    }
  });
});
let counts = _.chain(dictionary)
   .values()
   .uniq()
   .sortBy()
   .value();
console.log(counts);

