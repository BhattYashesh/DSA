let arr=[
    [1, 2],
    [3, 4]
]

//Output: 
  //  [1, 3],
   // [2, 4]

   let mat=[]
   for(let x=0;x<arr.length;x++) 
    {
        mat[x]=[]
        for(let y=0;y<arr[x].length;y++)
        {
              if(x!=y)
              {
                  mat[x][y]=arr[y][x];
              }
              else{
                mat[x][y]=arr[x][y];
              }
        }
       
    }
 console.log(mat);
 
  