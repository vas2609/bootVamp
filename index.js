function sum (...p) {
    if (p.length !== 1) {
        return p.reduce((acc, i) => i + acc, 0)
    }
    return (a) => {
        return a + p[0]
    } 
}


console.log(sum(2, 2))
