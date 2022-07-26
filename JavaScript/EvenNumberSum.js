arr = [1,2,3,4,5];
sum = 0;
for(let i of arr ){
    if(i%2 ==0){
        sum =sum+i;
    }
}
console.log(sum);