let list = [
    {name: "Andy", age: 20},
    {name: "Max", age: 22},
    {name: "Alex", age: 25},
    {name: "Nick", age: 26},

]

let search = document.getElementById("search");
let butt = document.getElementById("butt");

butt.addEventListener("click", () => {
    search.value == "google" ? alert("Yandex круче. Но это не точно, " + list[0].name) : alert(search.value + ", " + list[0].name)
});

function alertWithTimer() {
    setTimeout(() => {
        alert('alert с таймером 3 секунды');
    }, 3000);
}

//////////

function superSum(a, b) {
    a = Number(a);
    b = Number(b);
    return (alert(a + b));
}

///////
let e = 999;
let m = 111;
console.log('Было', 'e:', e,'m:', m);

let s = e;
e = m;
m = s;

console.log('Стало', 'e:', e,'m:', m);

///////////

function getMax() {

    let array = [];
    let max = 0;

    for(let i =0; i < 20; i++) {
        array.push(Math.random());
    }

    array.forEach((value) => {
        if(value > max) {
            max = value;
        }
    })

    console.log(array);
    console.log('Максимальный элемент', max);
}
getMax();

