var co = require('co');

function asyncCall(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 5)
        }, 1000);
    });
}

co(function* asyncGenerator() {
    let val = yield asyncCall(5)
    console.log('Value =', val);    // Value = 10
    val = yield asyncCall(10)
    console.log('Value =', val);    // Value = 15
});