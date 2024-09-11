for (let i = 1; i<=10; i++){
    let row=""
    for (let k = 1; k <= 10 - i; k++) {
        row += " ";
    }
    for(let j=1;j<=i;j++){
         row +="* "
    }
    console.log(row)
}
