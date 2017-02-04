function* Iterator(collection) {
	let index = 0;
    while (index < collection.length) {
        yield collection[index++];
    }
}

const iter = Iterator([22,29,35]);

for (let x of iter) {
    console.log(x);
}
