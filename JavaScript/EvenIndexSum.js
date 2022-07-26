arr = [1,2,3,4,5,6];
sum = 0;
arr.forEach((e,i) => {
    if(i%2 == 0){
        return sum =sum+e;
    }
});
console.log(sum);