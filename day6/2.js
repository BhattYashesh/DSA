let arr=[3, 7, 1, 5, 9, 0, 2]

  let min= +Infinity;
  let max= -Infinity;

  function test()
  {

        for(let i=0; i<arr.length; i++)
            {
              if(min > arr[i])
              {
                 min = arr[i]
              }
             }

            return min + " = minimum";
  }
  console.log(test());

  function test2()
  {

        for(let i=0; i<arr.length; i++)
            {
              if(max < arr[i])
              {
                 max = arr[i]
              }
             }

             return max + " = maximum";
  }
  console.log(test2());

 
 
  