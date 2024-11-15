let arr = [0,1,0,3,12];
let y = [];


for(let i=0; i<arr.length; i++)
{
    if(arr[i] == 0)
    {
        continue;
    }
    y.push(arr[i]);
}

for(let i=0; i<arr.length; i++)
{
    if(arr[i] != 0)
    {
        continue;
    }
    y.push(arr[i]);
}

console.log(y);