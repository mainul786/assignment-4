// 1. problem-1--- convert radian to degree, radianToDegree

function radianToDegree(radian){
    if(typeof(radian) !== 'number'){
        return 'please enter a valid number!!';
    }
    const degree = 57.296;
    const totalRadian = radian * degree;
    return totalRadian;
}

const myRadian = radianToDegree(25);


// 2. problem-2:-- check whether the given file name is a javascript file or not isJavaScriptFile

function isJavaScriptFile(fileName){
    if(typeof(fileName) !== 'string'){
        return 'your file name is missmatch!!';
    }
if(fileName.endsWith('.js')){
    return true;
}else{
    return false;
}
}
const file = 'index.js';
const sendFileName = isJavaScriptFile(file);


// 3. problem-3:--- calculate the total oil price that i have to pay 


function oilPrice(dieselInLiter, petrolInLiter, octaneInLiter){

    if(typeof(dieselInLiter, petrolInLiter, octaneInLiter) !== 'number' ){
        return 'please enter a valid information';
    }
    const diesel = 114;
    const petrol = 130;
    const octane = 135;

    const totalDieselPrice = dieselInLiter * diesel;
    const totalPetrilPrice = petrolInLiter * petrol;
    const totalOctanePrice = octaneInLiter * octane;
    const totalPrice = totalDieselPrice + totalOctanePrice + totalPetrilPrice;
    return totalPrice;
}

const oil = oilPrice(1, 1, 2);


// 4.problem

function publicBusFare(people){
    if(typeof(people) !== 'number'){
        return 'enter a valid information!!';
    }
    const busSit = 50;
    const microBusSit = 11;
    const publicBusTicketFare = 250;
    
    const bus = people % busSit ;
    const micro = bus % microBusSit;
    const remaning = micro * publicBusTicketFare;
    return remaning;
}

const peoples = publicBusFare(365);


//5. problem  

function isBestFriend(friend1, friend2){
if(typeof(friend1, friend2) !== 'object'){
    return ' enter valid info!!!';
}
    if(friend1.name === friend2.friend && friend2.name === friend1.friend){
        return true;
    }else{
        return false;
    }

}

const friend1 = {name:'najia', friend:'mainul'};
const friend2 = {name:'mainul', friend:'najia'}

const friend = isBestFriend(friend1, friend2);


