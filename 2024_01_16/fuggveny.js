function info(){
    console.log("Molnár Márk T13");
}

function hello(name){
    console.log(`Szia ${name}!`);
}

function teglalapKerTer(a, b){
    console.log(`Téglalap kerülete: ${2 * (a+b)}\nTéglalap területe: ${a*b}`);
}

let testName = "teszt";
let a = 10;
let b = 20;

let t0 = performance.now();
console.log("Molnár Márk T13");
console.log(`Szia ${testName}!`);
console.log(`Téglalap kerülete: ${2 * (a+b)}\nTéglalap területe: ${a*b}`);
let t1 = performance.now();

console.log(`Funkciókkal: ${Math.round(t1-t0)}ms`);

let t2 = performance.now();
info();
hello(testName);
teglalapKerTer(10,20);
let t3 = performance.now();

console.log(`Funkciók nélkül: ${Math.round(t3-t2)}ms`);