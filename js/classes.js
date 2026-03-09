function zeroExp() { 
    return Math.random() < 1/100 // 1%
}

class Log {

    exact() {
        let base = Math.floor(Math.random()*24)+1; 
        let a = 0;
        let exp = 0;
        if (base > 10) {
            exp = 2
        }
        else if ( base <= 2) {
            exp = Math.floor(Math.random()*10) + 1;
        }
        else {
            exp = Math.floor(Math.random()*6);
        }

        if (zeroExp()) {exp = 0;}

        a = base**exp


        return `log(${a}, ${base})`;
    }

    irrational() {
        let base = Math.floor(Math.random()*10)
        let a = 0;
        let exp =0;
        if (base <= 2) {
            a = Math.random() * ((base**10) - Math.sqrt(base)) + Math.sqrt(base);
        }
        else {
            a = Math.random() * ((base**5) - Math.sqrt(base)) + Math.sqrt(base);
        }

        return `log(${a}, ${base})`;
    }

}

log = new Log();

console.log(log.exact());