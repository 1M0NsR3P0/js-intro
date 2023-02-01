function funtionName(){
    console.log(`  oh i forgot to say... call it like this \n functionName() inside bracket sent parameter if you want..  iwill show you what is parameter later in this lession
 \n\n\n\n\n ... this is a funtion . funtion is just like a variable. you have to just declare a name and give it a (bracet like this and ) inside this () bracket you can sent some parameters. then curly brackets and  inside this curly bracket make some with to do... thats it (hint fo up! i forgot something dude!! \n\`)`);
}

   
funtionName();
// ///////////////////////////////////////////////////////////////////////////////////////////////
// if u give more than one parameter to a function then you have to give all the value of the fucntion if not then see what heppens
function sum(a, b, c, d, e){
    var add = a+b+c+d+e;
    console.log(add)
}
sum(2.4) //NaN
sum(1,2,3,4,5) //succed
// lets solve it with so many condition

function sum_v0_4(a,b,c,d,e,f){
    if(a != undefined && b!= undefined && c!=undefined && d!=undefined && e!= undefined && e!=undefined)
    {
        var add = a+b+c+d+e+f;
        console.log(add);
    }  
    else{
        console.log('please dont cheat me sent me all my parametr value');
    }
}
sum_v0_4(1,2,3); //error
sum_v0_4(1,2,3,4,5,6) //succed!
function add(one, two){
    return one + two;
}

function sub(one, two){
    return add(one,two);
}
let summ =  sub(3, 2) // i told you to substrack but you did the oposit .. you are fired!!!!
console.log(summ)

// /////////////////////////////
function movie(){

    return "Din-The day";
  
    return "Poran";
  
    return "Hawa";
  
  }
  
  console.log(movie());
