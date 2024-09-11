for (let i = 1; i<=4; i++){
    let row=""
    for (let k = 1; k <= 4 - i; k++) {
        row += " ";
    }
    for(let j=1;j<=i;j++){
         row +="* "
    }
    console.log(row)
}
