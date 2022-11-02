
function checkPrime(num){ 
  
     let count = 0;
     for(let a=0; a<=num; a++){
       
      
        if(num % a == 0){
           count++;
        } 
    }
   
    if(count == 2){
      return true;
     }else{
       return false;
      }
}

let ans = checkPrime(13);

if(ans == true){
  console.log("prime");
}else{
  console.log("not prime");
}