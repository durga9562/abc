//Without using predefind method

str1 = "HaiHello";
str2 = "";
for(let i=str1.length-1;i>=0;i--){
    str2 += str1[i];
}
console.log(str2);

//Using predefind method

str2 = ([...str1].reverse().join(""));
console.log(str2)