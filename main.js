let user = {
    name: "John",
    surName: "Mark"
}

user.name = "Peter"
delete user.name

let fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

function calculateFruit(fruit) {
    let ret = 0;
    for (let name of Object.keys(fruit)) {
        ret += fruit[name]
    }
    return ret
}
calculateFruit(fruit)

