// letは変数
// let 変数名:型 = 初期値;
let radius:number = 10;

// constは定数
// const 定数名:型 = 初期値;
const PI = 3.14;

let area = PI * radius * radius;
console.log("radius :", radius);
console.log("area   :", area);

// letで定義した変数は代入可能
radius = 20;
area = PI * radius * radius;
console.log("radius :", radius);
console.log("area   :", area);