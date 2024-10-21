// Find the maximum Element  from the Array;
// let arr = [1,2,3,4,5,6];
//  output = 6; 
// let arr = [1,9,3,8,5,6];
//  output = 9; 

function max(output,arr){
    let maximum = Math.max(...arr)
      output.push(maximum)
      console.log(output);
      
}

max([],[1,9,3,4,6])
