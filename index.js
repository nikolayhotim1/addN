'usestrict';
function addN(n) {
    let adder = function (x) {
        return n + x;
    };

    return adder;
}

let add3 = addN(3);
/*
let add3 = function (x) {
    return 3 + x;
};
*/

console.log(add3(4)); // 7
/*
function (4) {
    return 3 + 4;
}
*/

console.log(add3(8)); // 11
