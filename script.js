let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let input = document.getElementById('input');
let btn = document.getElementById('btn');
let password = 0
let demo = document.getElementById('demo');
// console.log(password)

function pass() {
    data =""
    for (let i = 0; i < input.value; i++) {
     
        password = Math.round(Math.random()*arr.length);
        data += arr[password]
        

    }
    demo.innerHTML = data
}
