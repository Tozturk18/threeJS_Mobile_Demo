function newLoader() {
    console.log("HELLOOO!");
    document.body.querySelector("main").innerHTML = "HELLOOO!";
}

window.onload = newLoader;

console.log(document);
console.log(document.body);
console.log(document.querySelector('body'));
console.log(document.body.querySelector("main"));
document.body.querySelector('main');


