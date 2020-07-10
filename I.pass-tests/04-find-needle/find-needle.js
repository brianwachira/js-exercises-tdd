function findNeedle(words,term) {


  for (let index = 0; index < words.length; index++){
    if(words[index].includes(term)){
      return index;
    }
  }
}

module.exports = findNeedle;
