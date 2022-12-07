function newLoader() {
    console.log("Hello");
}

window.onload = newLoader;

console.log("Hello");

console.log(document);
console.log(document.body);
console.log(document.querySelector('body'));
console.log(document.body.querySelector("main"));
document.body.querySelector('main');
document.body.querySelector("main").innerHTML = "HELLOOO!";
