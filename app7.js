function asyncCall(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 5)
        }, 1000);
    });
}

function runGenerator(generator) {
    const gen = generator();
    let ret;
    (function iterate(val){
        ret = gen.next(val);
        if (!ret.done) {
            ret.value.then(iterate);
        }
    })();
}

runGenerator(function* asyncGenerator() {
    let val = yield asyncCall(5)
    console.log('Value =', val);    // Value = 10
    val = yield asyncCall(10)
    console.log('Value =', val);    // Value = 15
});