

var click = document.querySelector(".random");

click.addEventListener("click", function(){
    var randomNumber = Math.floor(Math.random() * 2) + 1;
console.log(randomNumber);
if (randomNumber === 1){
    document.querySelector(".img1").setAttribute("src","./heads.svg");
    document.querySelector("h3").innerHTML = "Heads";
}else {
    document.querySelector(".img1").setAttribute("src","./tails.svg");
    document.querySelector("h3").innerHTML = "Tails";
}
});