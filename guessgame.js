/*user enter range and generated random number between 1 to max */
/*add hint for reach to random number */
let rn=prompt("enter maximum number ");
let randomnum=parseInt(rn);
let n1=Math.floor(Math.random()*randomnum)+1;
let userguess=prompt("enter number");
while(true){
    if(userguess=="quit"){
        console.log("quit");
        break;
    }   
    if(userguess==n1){
        console.log(`congrates right guess is${n1}`);
        break;
    }else if(userguess>n1){
       userguess=prompt("your guess is too large");
    }
    else {
        userguess=prompt("your guess is too small");
    }
    
}

    
