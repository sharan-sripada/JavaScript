let function1= ()=> 2;
//console.log(function1);
function double(function1){
    return function1()*5;
}    
console.log('Paramter Function: '+double(function1));