let str = "A man, a plan, a canal: Panama";

function Palindrome(str)
{
    let specialChar = [":"," ",","];
    let str1 = "";
    let str2 = "";

    for(let char of str)
    {
        if(specialChar.includes(char) == false)
        {
            str1 += char.toLowerCase();
        }
    }

    for(let i=str.length-1; i>=0; i--)
    {
        if(specialChar.includes(str[i]) == false)
        {
            str2 += str[i].toLowerCase();
        }
    }


    for(let j=0; j<str1.length; j++)
    {
        if(str1[j] != str2[j])
        {
            return false;
        }
    }


    return true;

}

console.log(Palindrome(str));