let arr= [1,2,3,4,5,6,7,8];
let target=3;

let low=0;
let high=arr.length-1;


   while(low<=high)
   {
      let mid = Math.floor((low+high)/2);

       if(arr[mid]==target)
       {
         console.log(mid);
         break;
       }

        if(arr[mid]<target)
        {
            low = mid+1;
        }
        else if(arr[mid]>target)
        {
            high=mid-1;
        }
   }
