function* foo(x) {
   const y = yield x;
   const z = yield y;
   return z;
}

const gen = foo(1);

console.log(gen.next());    // { value: 1, done: false }
console.log(gen.next(2));   // { value: 2, done: false }
console.log(gen.next(3));   // { value: 3, done: true }
