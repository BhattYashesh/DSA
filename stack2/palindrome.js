let any = "mom"


  function example(str)
  {
      let empty= "";
      let flag=true;
      
        for(let i=str.length-1 ; i>=0 ; i--)
        {
                 empty += str[i];
        }

        for(let i=0; i<str.length ; i++)
        {
            if(str[i] != empty[i])
            {
                flag = false ; 
                break;
            }
        }

        return flag;
  }

  console.log(example(any));
  
  console.log(example("level"));
  
  