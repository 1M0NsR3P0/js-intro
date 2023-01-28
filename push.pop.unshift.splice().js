let arr = ['e','o'];
arr.push('u','v','w','x');
console.log(arr);
arr.pop();
console.log(arr);
arr.pop('w'); //cab;t pop two,,. wull lrarn later
console.log(arr);
arr.unshift('a');
console.log(arr);
arr.splice(2,0, 'i') //here 2 defines postion of new elements and 0 is defines as an argument defininng if 0 item will be deleted
console.log(arr);
arr.pop();
console.log(arr);
arr.splice(arr.length-1, 0, 'remove me');
console.log(arr);
arr = arr.slice(0, 4); //0 if for from and 4 is for where... start to end postion
arr.push('u')
console.log(arr);
