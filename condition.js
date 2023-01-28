let a = 10;
let b = 15;
let c = true;
let d = false;
if(a==10 && b ==15 || c == true || d==true){
    console.log('done')
}
else{
    console.log('nope')
}
if(a==10 && (b ==15 && c == true) || d==true){ //inside bracket must be true
    console.log('done')
}
else{
    console.log('nope')
}


// //////////////////////////////////////

if(a!==b){
    console.log(`a is not equal to b`);
    if(b!=a){
        console.log(`b is not equal a`)
        if(c==true){
            console.log('or kitni giroge tum')
            if(d==true){
                console.log(`tum nehi sudroge`)
            }
        }
    }
}