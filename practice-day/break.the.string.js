const reverseMaker = (word)=> {
    //Write Your solution Here
  var str = '';
    for (let i = word.length-1; i>=0; i--){
     str = str.concat(word[i])
  }
  console.log(str);
  };

reverseMaker('GeeksforGeeks');
reverseMaker(`Hello`);