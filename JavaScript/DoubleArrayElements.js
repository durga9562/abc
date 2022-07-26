a = [1,2,4];
b=[];
b.push(a.map( e => e*2));
console.log(b);

//2nd Approach

a = [1,2,3];
b=[];
for(let i of a){
    b.push(i*2);
}
console.log(b)

//3rd Approach

a=[1,2,3]
b=[];
a.forEach(e => b.push(e*2));
console.log(b);