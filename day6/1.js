let arr= [10, 20, 30, 40, 50]

target=30;
  

function test()
{
    for(var i=0; i<arr.length; i++)
    {
          if(arr[i]==target)
          {
            return i;
          }
    }
    return -1;
}
console.log(test());
