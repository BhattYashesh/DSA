let arr= [4, 7, 1, 9]
let target= 5;

 function test()
 {
    for(let i=0 ; i<arr.length ; i++)
    {
         if(arr[i]==target)
         {
            return true;
         }
    }
    return false;
 }
 console.log(test());
 