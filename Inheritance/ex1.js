//Prototypal Inheritence using objects

let head = {
    glasses: 1
}

let table = {
    pen: 3,
    __proto__:head
}

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
}

let pocket = {
    money: 2000,
    __proto__: bed
}
console.log(pocket.pen);
console.log(bed.glasses);
console.log(table.money);