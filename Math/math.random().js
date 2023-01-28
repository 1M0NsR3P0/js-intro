function randomLopper(){
    let random = Math.random(10)*10;
    random = Math.floor(random)
    while(random <= 10){
    
        console.log(Math.floor(Math.random(10) *100));
        console.log(`now printed :` + (random+1) +` times`);
        random++;
    }
}
let a = 1;
while(a <= 10){
    randomLopper();
    console.log(`66666666666666666666666666666666666666666666666666666666666666666666666*`)
    a++;
}