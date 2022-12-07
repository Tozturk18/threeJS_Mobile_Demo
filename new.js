function newLoader() {
    console.log("Hello");
}

window.onload = newLoader;

window.onload( (event) => {

    console.log("HELP!");

} );

console.log("Hello");

alert(window.onload);

console.log(document);
console.log(document.body);
console.log(document.querySelector('body'));
console.log(document.body.querySelector("main"));
document.body.querySelector('main');
document.body.querySelector("main").innerHTML = "HELLOOO!";


