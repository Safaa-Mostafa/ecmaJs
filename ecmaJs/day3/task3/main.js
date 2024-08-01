const myObject = {
  name: 'Safaa',
  age: 20,
  city: '10th Of Ramadan'
};

myObject[Symbol.iterator] = function* () {
  for (let key in this) {
    yield [key, this[key]];
  }
};
for (let [key, value] of myObject) {
  console.log(`${key}: ${value}`);
}