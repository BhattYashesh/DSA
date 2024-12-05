function unique(arr){
     myset = new Set(arr);

      myarr = [];

       for(let value of myset)
       {
        myarr.push(value);
       }

       console.log(myarr);
       
}
unique([1,2,2,2,2,3,3,4,5])