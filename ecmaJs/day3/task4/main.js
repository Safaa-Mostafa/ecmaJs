function* fibonacci(no) {
    var current = 0;
    var next = 1;
        for (var i = 0; i < no; i++) {
            yield current;
            [current, next] = [next, next + current];
        }

}


const sequence = fibonacci(5);
for (let value of sequence) {
    console.log(value);
  }
