function fatorial(val) {
    for (let n = val-1; n > 1; n--) {
        val *= n
    }
    return val;
}

console.log(fatorial(5))