let arr = [1, 2, 2, 3, 4, 2]
let count=0;

target=2

 function test()
 {
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==target)
        {
            count++;
        }
    }
    return count;
 }
 
 console.log(test());
 
 