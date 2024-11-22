let sample = "hello";
let str=sample.split("");
   let left=0;
   let right=str.length-1;

   function any()
   {
       while(left<right)
       {
          let temp = str[left];
          str[left]=str[right];     
          str[right]=temp;
          left++;
          right--;

         //  or  [str[left],str[right]]=[str[right],str[left]]
       }
       return str.join("");
   }
   console.log(any());
   
 