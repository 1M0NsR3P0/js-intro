const solution = (str)=> {
    //Write Your solution Here
    if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
     str = 'vowel'
  }
  else{
      str = 'consunant'
  }
  return str;
  };
  console.log(solution('a'))
  console.log(solution('u'))
  console.log(solution('k'))