let arr= [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1]
    ]
  //  Output: 9 (2 + 6 + 1) 

  sum=0;
  for(var x=0; x<arr.length; x++)
  {
    for(let y=0;y<arr[x].length;y++)
    {
          if(x==y)
          {
            sum+=arr[x][y];
          }
    }
  }
  console.log(sum);
  