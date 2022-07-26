arr = [1,2,3,4,5,6];
arr1 = [arr.map((e) => e%2 == 0 ? e*2 : e*3)];
console.log(arr1);