let str = "hello world";

function vowel(str)
{
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    for(let character of str)
    {
        if(vowels.includes(character))
        {
            count++;
        }
    }
    console.log(count);
}

vowel(str);