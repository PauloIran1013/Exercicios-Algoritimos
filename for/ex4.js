let a = 0
let b = 1
console.log("A sequência de Fibonacci até o 10º termo é:");
console.log(a);
console.log(b);
for(let i=2; i<=10;i++){
    let temp = a+b
    console.table({temp})
    a=b
    b=temp
}

