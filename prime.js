function checkprime(num){
     
     let count=0;

    for( let i=0;i<=num;i++){
     
     if(num%i==0){
         count++;
      
}
      if(count==2){
          return true;
      }else{
          return false;
      
}
}


let ans = checkprime(13);

if(ans == true){
   console.lo("prime");
  }else{
     console.log("not prime");