msg = "prasad@_";
res = "/[!@#%^&*()+-={};:^";
reg= msg.split("").filter(e => res.includes((e)).join(""));
console.log(reg);