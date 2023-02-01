// /// lets declare an object first
var objects = {
    name : `imon`,
    age : 25,
    gpa : 4.5
}
console.log(objects);
console.log(objects.gpa); //if you know the object name like , if you do know there is an obj called name or age then use dot(.)
console.log(objects[`name`]); //alternative to (.) notation is array like define with [] braces
console.log(Object.keys(objects)); // if you don't know what are inside then first know with this key method. then find value
console.log(Object.values(objects)); // or find values inside that  object with values method
// one method to see all the obejcts together is:
console.log(Object.keys(objects)+': ' + Object.values(objects)) // but this doesn't looks good and easy to read so...
// another deficult method is :
for(let i=0; i<= objects.length; i++){ // it is not gonna run, cause objects is not an array. so lets make an array with all obj
    let val = objects[i]
    console.log(objects[val])
}
let length = Object.keys(objects) // length is an array with all the element inside object
let values = Object.values(objects); // values array
for(let i=1;i<length.length;i++){
    console.log(length[i]+': '+values[i])
    //or like this
    console.log(length[i],`: `, objects[length[i]])
}
// now its perfactly okay
if(objects.age <= 17){
    console.log(`hei kid... stay away`)
}
else{
    console.log(`you are now adult person... lets go ....`);
}

