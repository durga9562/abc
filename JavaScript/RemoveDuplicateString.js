str = ["krishnaaaaaaaaaaa"];
res = str.map(e => [...new Set(e)].join(""))
console.log(res);

//2nd Approach


str = ["krishnaaaaaaaaaaa"];
re=str.map(e => e.split("").filter((v,i,arr) => 
             arr.indexOf(v) == i).join(""));
             console.log(re);