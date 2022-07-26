a = [1,2,2,3,4,4,5,5];
b = [...new Set(a)];
console.log(b);

//2nd Appraoch

a = [1,2,2,3,4,4,5,5];
b=a.filter((e,i) => {
    return a.indexOf(e)==i
})
console.log(b)