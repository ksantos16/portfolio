'use strict';

// e = 2.718;

/*function amIOldEnough(age) {
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}*/

function amIOldEnough(age) {
    // debugger;
    if (age < 12) {
        // debugger;
        return 'No, sorry.';
    } else if (age < 18) {
        // debugger;
        return 'Only if you are accompanied by an adult.';
    } else {
        // debugger;
        return 'Yep, come on in!';
    }
}

const result = amIOldEnough(22);

console.log(result);

// console.trace(amIOldEnough);

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You cannot find the square root of negative numbers')
    }
    return Math.sqrt(number);
};

const squareRootResult = squareRoot(121);

// const squareRootResult = squareRoot(-1);

console.log(squareRootResult);

function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch (error) {
        answer = squareRoot(-number) + "i";
    } finally {
        return `+ or - ${answer}`;
    }
}

const imaginarySquareRootResult = imaginarySquareRoot(-49)

console.log(imaginarySquareRootResult);


function itSquareRoots4() {
    return squareRoot(4) === 2;
}

const itSquareRoots4Result = itSquareRoots4();

console.log(itSquareRoots4Result);


/*This function creates a local variable called factors and initializes it as an empty
array. It then loops through every integer value from 1 up to n (the number that
was given as an argument) and adds it to the array of factors using the push()
method, if it’s a factor. We test if it’s a factor by seeing if the answer leaves a
whole number with no remainder when n is divided by the integer 1 (the
definition of a factor).*/

/*function factorsOf(n) {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n / i === Math.floor(n / i)) {
            factors.push(i);
        }
    }
    return factors;
}*/

/*function factorsOf(n) {
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}*/

function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);


    /*This will use the factorsOf() function
    and check to see if the number of factors in the array returned by the
    factorsOf() function is 2. This is because all prime numbers have precisely two
    factors.*/

    /*function isPrime(n) {
        return factorsOf(n).length === 2;
    }*/

    function isPrime(n) {
        try {
            return factorsOf(n).length === 2;
        } catch (error) {
            return false;
        }
    };

    // test('factors of 12', () => {
    //     expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
    // });

    // test('2 is prime', () => {
    //     expect(isPrime(2)).toBe(true);
    // });

    // test('10 is not prime', () => {
    //     expect(isPrime(10)).not.toBe(true);
    // });

    // test('non-numerical data returns not prime', () => {
    //     expect(isPrime('two')).toBe(false);
    // });

    // test('non-integer numbers return not prime', () => {
    //     expect(isPrime(1.2)).toBe(false);
    // });

    // test('negative numbers return not prime', () => {
    //     expect(isPrime(-1)).toBe(false);
    // });

    // it('should throw an exception for non-numerical data', () => {
    //     expect(factorsOf('twelve').toThrow();
    // });

    // it('should throw an exception for negative numbers', () => {
    //     expect(() => factorsOf(-2)).toThrow();
    // });

    // it('should throw an exception for non-integer numbers', () => {
    //     expect(() => factorsOf(3.14159)).toThrow();
    // });