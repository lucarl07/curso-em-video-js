function fatorial(val) {
    if (val === 1) {
        return 1;
    } else {
        return val * fatorial(val-1)
    }
}

console.log(fatorial(5))