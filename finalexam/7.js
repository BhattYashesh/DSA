let arr= [1, 3, 5, 7, 9, 11];
let target=7;
let low=0;
let high=arr.length-1;

function any(arr,target)
{
   while(low<=high)
   {
      let mid = Math.floor((low+high)/2);
       if(arr[mid]==target)
       {
        return mid;
        
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
   return -1;
}
console.log(any(arr,target));