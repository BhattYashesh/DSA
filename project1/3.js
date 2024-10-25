let arr= [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]
  let  Target = 6  ;
// Output: true
let flag=false ;
  for(let x=0;x<arr.length;x++)
  {
    for(let y=0;y<arr[x].length;y++)
    {
        if(arr[x][y]==Target)
        {
           flag=true;
        }
    }
  }
  console.log(flag);
  