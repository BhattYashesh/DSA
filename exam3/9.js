let str = "hello world";

function convertUppercase(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str[i - 1] == " ") {
            ans += str[i].toUpperCase();
        }
        else {
            ans += str[i];
        }
    }
    console.log(ans);
}

convertUppercase(str);
