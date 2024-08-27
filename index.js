console.log("Hello world!!!...");
console.log("Hello world!!!...");

document.getElementById('name').innerText = 'Hello';

document.getElementById('changeTextButton').onclick = function() {
    document.getElementById('name').innerText = 'Hello Again!';
    document.getElementById('name').style.backgroundColor = 'red';
    document.getElementById('name').style.color = 'white';
};