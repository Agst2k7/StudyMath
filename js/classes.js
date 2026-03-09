class Log {

    exact() {
        let base = Math.floor(Math.random()*25);
        let a =0;
        let exp =0;
        if (base > 10 ) {
            exp = Math.floor(Math.random)*3 
        }
        else if ( base <= 2) {
            a = Math.random()*10;
        }
        else {
            a = base**(Math.random()*5);
        }
        base = base**(Math.random()*5);


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