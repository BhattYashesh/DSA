function f(arr,n)
{
    if(n==0)
    {
        return 0;
    }

     return arr[n-1] + f(arr,n-1);
}
console.log(f([1,2,3,4,5],5));