function reverse(output,arr) {
    for(x=arr.length-1;x>=0;x--)
    {
         output.push(arr[x]); 
    }
    console.log(output);
    
}

reverse([],[1,2,3,4,5]);