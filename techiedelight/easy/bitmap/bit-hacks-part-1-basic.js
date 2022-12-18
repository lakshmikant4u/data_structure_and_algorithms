// https://www.techiedelight.com/bit-hacks-part-1-basic/

// Problem 1. Check if an integer is even or odd

const checkOddOrEven = num => {
    if ((num & 1) != 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is even`);
    }
}

checkOddOrEven(8);
console.log("~~~~~~~~~~~~~~~")
checkOddOrEven(9);
console.log("~~~~~~~~~~~~~~~")

const checkOppositeSigns = (a, b) => {
    console.log(`${a} in binary is ${a.toString(2)}`)
    console.log(`${b} in binary is ${b.toString(2)}`)

    let isOpposite = ((a ^ b) < 0);
    if (isOpposite) {
        console.log(`${a} & ${b} have opposite signs`);
    } else {
        console.log(`${a} & ${b} have same signs`);
    }
}

checkOppositeSigns(3, -4);
console.log("~~~~~~~~~~~~~~~")
checkOppositeSigns(6, 14);
console.log("~~~~~~~~~~~~~~~")