let str = "hello"
let stack = [];

function rev()
 {
    for(let char of str){
    stack.push(char)
    }

    let ans = ""

   while(stack.length > 0){

    ans += stack.pop()

 }

console.log(ans)
}
rev()