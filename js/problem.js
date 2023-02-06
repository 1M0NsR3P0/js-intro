function mindGame(number){
    if(typeof number == 'number'){
        output = number*3+10/2-5;
        console.log(output)
    }
    else{
        console.log('Error! please enter a Number')
    }
}
mindGame(20)