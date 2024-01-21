

function songuyento(num) {
    for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function sumsonguyento() {
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let arr = [];
    let sum = 0;

    for (var i = Math.max(2, a); i <= b; i++) {
        if (songuyento(i)) {
            console.log(i)
            arr.push(i);
            sum += i;
        }
    }
    console.log(arr)
    let message = document.getElementById("message")
    message.innerHTML = `Các số nguyên tố trong khoản ${a} va ${b}: ${arr}`
    result.innerHTML = `    Tổng các số nguyên tố: ${sum}`

}