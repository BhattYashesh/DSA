function count(arr)
{
    let mySet = new Map();

     for(let value of arr)
     {
         if(mySet.has(value))
         {
            mySet.set(value , mySet.get(value)+1);
         }
         else{
            mySet.set(value,1);
         }
     }

      console.log(mySet);
      
    
}
count([1,2,2,2,2,3,3,4,5]);