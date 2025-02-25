const { orderBy, validateArray } = require('./script.js');

test('Check Sort Array', () => {
    expect(orderBy(data, ["name", "age"])).toEqual(sortedData);
});

const data = [
    { name: "Evgeniy", age: 23 },
    { name: "Valentina", age: 19 },
    { name: "Team", age: 18 },
    { name: "Dmitiy", age: 20 }
];

const sortedData = [
    { name: "Dmitiy", age: 20 },
    { name: "Evgeniy", age: 23 },
    { name: "Team", age: 18 },
    { name: "Valentina", age: 19 }
];

test('Check on array', () => {
    expect(() => orderBy("not an array", ["name", "age"])).toThrow("Входные данные должны быть массивом");
});

test('Check empty data', () => {
    const invalidData = [
        { name: "Evgeniy", age: 23 },
        { name: "Valentina", age: 19 }, 
        { name: "Team"},
        { name: "Dmitiy", age: 20 }
    ];
    expect(() => orderBy(invalidData, ["name", "age"])).toThrow("Все элементы должны содержать имя и возраст");
});