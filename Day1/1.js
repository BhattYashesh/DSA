let arr=[1,2,3,4,5]
let a = 5

 function target()
 {
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] == a)
        {
            return i;
        }
    }
    return -1;
 }
 console.log(target());
 ;
    
