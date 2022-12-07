function newLoader() {
    console.log("Hello");
}

window.onload = newLoader;

console.log("Hello");

document.body.querySelector("main").innerHTML = "HELLOOO!";
console.log(document);
console.log(document.body);
console.log(document.body.querySelector("main"));