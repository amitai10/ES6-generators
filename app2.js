function Iterator(collection) {
    let index = 0;
    const iter = {};
    iter[Symbol.iterator] = () => {
        return {
            next: () => {
                if (index < collection.length) {
                    return {
                        value: collection[index++],
                        done: false
                    };
                } else {
                    return {
                        value: null,
                        done: true
                    };
                }
            }
        }
    }

    return iter;
}

const iter = Iterator([2,21,33]);
for (let x of iter) {
    console.log(x);
}