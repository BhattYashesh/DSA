let arr= [1, 2, 3, 2, 4]

target=2;
  max=-Infinity

function test()
{
    for(var i=arr.length; i>=0; i--)
    {
          if(arr[i]==target)
          {
             return i;
          }
    }
    return -1;
}
console.log(test());
