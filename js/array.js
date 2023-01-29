var arr = ['whats', 'up', `my` , "my", 'dear'];
console.log(arr);
console.log(arr[2]);
 console.log(arr.indexOf('up'));
 console.log(arr.indexOf('my', 'dear')); //single is working but multiple is not... i will learn it later okay?
 console.log(arr.includes('dear'));
 console.log(arr.length);
 var arr2 = arr[2];
 arr[3] = 'arr3';
 console.log(arr[3], arr2 + ' '+ arr);