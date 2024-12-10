let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

function findsection(a1, a2) {
    let sample = new Set(a1)
    let ans = []

    for (let char of a2) {
        {
            if (sample.has(char)) {
                ans.push(char)
            }
        }
    }
    console.log(ans);

}


findsection(arr1,arr2)
