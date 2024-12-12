let q1 = []
let q2 = []

function queue(a)
{
       q2.push(a);

       while(q1.length > 0)
       {
         q2.push(q1.shift())
       }

       [q1,q2] = [q2,q1]
}

function pop()
{
    if(q1.length===0)
    {
        return null;
    }
   return q1.shift();
}
queue(10)
queue(20)
queue(30)
queue(40)
queue(50)
console.log(pop());
