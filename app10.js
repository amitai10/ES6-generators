function asyncCall(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 5)
        }, 1000);
    });
}

(async function asyncGenerator() {
    let val = await asyncCall(5)
    console.log('Value =', val);    // Value = 10
    val = await asyncCall(10)
    console.log('Value =', val);    // Value = 15
})();