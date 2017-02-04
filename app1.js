function Iterator(collection) {
    let index = 0;
    return {
        next: () => {
            return collection[index++];
        },
        hasNext: () => {
            return index < collection.length;
        }
    }
}

const iter = Iterator([1,2,3]);
while (iter.hasNext()) {
    console.log(iter.next());
}

