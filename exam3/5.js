5
let arr = [1,2,3,4,5,6];
let target = 4;

function checkTarget(arr,target)
{
    for(let num of arr)
    {
        if(num == target)
        {
            return true;
        }
    }
    return false;
}

console.log(checkTarget(arr,target));
