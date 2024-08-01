let obj = {
    name: "safaa",
    address: "sharkia",
    age: 22
}
let Handler = {
        set(target, prop, receiver) {
            if (prop === "name") {
                if ((receiver.length != 7)) {
                    throw new Error('only string of 7 characters');
                } else {
                    target[prop] = receiver;
                }
            } else if (prop === "address") {
                if (!(isNaN(receiver))) {
                    throw new Error('address property that accepts only string value');
                } else {
                    target[prop] = receiver;
                }
            } else if (prop === "age") {
                if (receiver < 25 || receiver > 60) {
                    throw new Error('age property that accepts numerical value between 25 and 60');
                } else {
                    target[prop] = receiver;
                }
            }
        },
    
    get(target, prop, receiver) {
        if (prop === "name") {
            return target[prop];
        } else if (prop === "address") {
            return target[prop];
        } else if (prop === "age") {
            return target[prop];
        }

    }
}
let prox = new Proxy(obj, Handler);
// prox.name = "safaaaa";
prox.name = "sa";
prox.address = "cairo";
// prox.address ="33";
// prox.address =33;
// prox.age = 20;
// prox.age = 61;
// prox.age = 40;

console.log(prox.name);
console.log(prox.address);
console.log(prox.age);






console.log(prox);