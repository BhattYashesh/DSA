function any(a)
{
    let sum=0;
    while(a!=0)
    {
         let num = a%10;
         a = Math.floor(a/10);
         sum += num;
    }

      console.log(sum);
      
}

any(123);
