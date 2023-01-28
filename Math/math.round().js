let a = Math.random()*10;
let b = 0.9;
let sum=a/b;
console.log(sum + ` and around : ` + Math.round(sum));
console.log(Math.round(4.2))
console.log(Math.round(4.5))



// a similar method is math.ceil
console.log(Math.ceil(sum));
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.4));


// the differ between round and ceil is 
// ceil returns the smallest rounds of a float number
// and rounds gives the hifgh value of a float number
// as example 4.65 is 5 for math.round and 4 for ceil
// another differ is ceil don't follow .5 breakup like
// 5.5 or 5.4 in round is 6 and 5
// where is ceil 5.5 or 5.4 is always 5 
// **************8 actually see the differ yourself***********************************8