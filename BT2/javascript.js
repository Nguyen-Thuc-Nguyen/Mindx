function numberOneTriangle() {
    let num = document.getElementById("num").value;
    let result = document.getElementById("result")
    result.innerHTML = ""
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push("*".repeat(i))
    }
    arr.forEach(element => {
        let textnode = document.createTextNode(`${element}`);
        result.appendChild(textnode);
        result.appendChild(document.createElement("br"));
    });
}