// ******************************* // Problem -1 // ***********************************************//

/*
mindGame() function takes a number as a parameter and returns a number and it multiply that number with 3 and add 10 to it
then devide the result with 2  and substrack 5 from it then returns the final results.
*/
function mindGame(number){
    if(typeof number == 'number'){
        let result = (number*3+10)/2-5;
        return result;
    }
    else{
        return 'Error! please enter a Number';
    }
}



// ******************************* // Problem -2 // ***********************************************//

/*
This evenOdd() function is a function that takes a string as a parameter. it only takes strings as a 
parameter otherwise it will throw an error! This function checks how many letters in a the string and and check if the 
length of the string is an even or an odd number, and returns odd or even as a string. 
*/
function evenOdd(strings){
    if(typeof strings == 'string'){
        if(strings.length % 2 == 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
    else{
        return 'Please Enter A String type';
    }
}



// ******************************* // Problem -3 // ***********************************************//

/*
isLGSeven() function takes a number only parameter and also returns a number as a result. this function check the
input number and substrack it from 7 and check if the resulted sum is less than seven or not. if Yes then 
returns that input number and if not then returns  the number and multiply it by 2
*/
function isLGSeven(number){
    if(typeof number == 'number'){
        let sum = number - 7;
        if(sum<7){
            return sum;
        }
        else{
            return number*2;
        }
    }
    else{
        return 'Please Enter A Number';
    }
}



// ******************************* // Problem -4 // ***********************************************//

/*
findingBadData() function finds the negative data from the given data array. and count how many bad data are there.
then returns it as a number. this function only takes an array type object as a parameter and also checks if the
datas inside of the array is a number or not. if not it will throw errr!
*/
function findingBadData(inputData){
    if(Array.isArray(inputData)){
        let sum = 0;
        for(let i = 0; i<inputData.length; i++){
            if(inputData[i]<0){
                sum+=1;
            }
        }
        return sum;
    }
    else{
        return `Erorr! it's not an array`;
    }
}



// ******************************* // Problem -5 // ***********************************************//

/*
gemsTODiamond() function takes 3 valid parameter. it takes only numbers as a parameter. this function counts how many diamond
all the three friends have in total by multiplying every friends gems with 21,32 and 43 serially.  it then checks if total
diamonds is more than 2000 or not. if so, then it returns how much diamonds is exceeded from 2000 and if not, it returns the total diamond counts.
*/
function gemsToDiamond(friend1Gem, Friend2Gem, Friend3Gem){
    if(typeof friend1Gem == 'number' && typeof Friend2Gem == 'number' && typeof Friend3Gem == 'number'){
        let firstFriendDiamond = friend1Gem*21;
        let secondFriendDiamond = Friend2Gem*32;
        let thirdFriendDiamond = Friend3Gem*43;
        let TotalDiamond = firstFriendDiamond+secondFriendDiamond+thirdFriendDiamond;
        if(TotalDiamond >= (1000*2)){
            TotalDiamond = TotalDiamond-2000;
            return TotalDiamond;
        }
        else{
            return TotalDiamond;
        }
    }
    else {
        return 'Error!! Wrong parameter type';
    }
}
