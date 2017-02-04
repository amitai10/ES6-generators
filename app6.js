function asyncCall(x) {
    setTimeout(() => {
        gen.next(x + 5)
    }, 1000);
}

function* asyncGenerator() {
    let val = yield asyncCall(5)
    console.log('Value =', val);    // Value = 10
    val = yield asyncCall(10)
    console.log('Value =', val);    // Value = 15
}

const gen = asyncGenerator();
gen.next();