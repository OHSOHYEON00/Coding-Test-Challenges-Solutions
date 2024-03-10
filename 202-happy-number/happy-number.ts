function isHappy(n: number): boolean {

    const doubleDigit = new Map<number, number>();

    for(let i=0; i<10; i++) {
        doubleDigit.set(i, i*i);
    }
    
    let strN = `${n}`;
    
    while(+strN > 9) {
        let add = 0;

        for(let i=0; i<strN.length; i++) {
            add += doubleDigit.get(+strN[i]);
        }

        strN = add.toString();
        
        if (add === 1) break;
    }
    
    return +strN === 1 || +strN === 7;
};