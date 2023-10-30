function factoriaal(n) {
    if (n === 0) {
        return 1; 
    } else {
        return n * factoriaal(n - 1);
    }
}


let result = factoriaal(5);
console.log(result);