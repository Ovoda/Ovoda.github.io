amount = document.getElementById("donation_amount").value;
console.log(amount);

input = document.getElementById("donation_amount");

input.addEventListener('change', updateValue);
function updateValue(e) {
    if (e.target.value < 50) {
        document.getElementById("1").style.opacity = "100%";
        document.getElementById("2").style.opacity = "30%";
        document.getElementById("3").style.opacity = "30%";
        document.getElementById("4").style.opacity = "30%";
        document.getElementById("rarity_description").innerHTML = "Common NFT<br /> this is a description of what you will get. Enjoy !";
    } else if (e.target.value <= 100 && e.target.value > 50) {
        document.getElementById("1").style.opacity = "30%";
        document.getElementById("2").style.opacity = "100%";
        document.getElementById("3").style.opacity = "30%";
        document.getElementById("4").style.opacity = "30%";
        document.getElementById("rarity_description").innerHTML = "Rare NFT<br /> this is a description of what you will get. Enjoy !";
    } else if (e.target.value <= 200 && e.target.value > 100) {
        document.getElementById("1").style.opacity = "30%";
        document.getElementById("2").style.opacity = "30%";
        document.getElementById("3").style.opacity = "100%";
        document.getElementById("4").style.opacity = "30%";
        document.getElementById("rarity_description").innerHTML = "Epic NFT<br /> this is a description of what you will get. Enjoy !";
    } else if (e.target.value > 200) {
        document.getElementById("1").style.opacity = "30%";
        document.getElementById("2").style.opacity = "30%";
        document.getElementById("3").style.opacity = "30%";
        document.getElementById("4").style.opacity = "100%";
        document.getElementById("rarity_description").innerHTML = "Metafunds Master NFT<br /> this is a description of what you will get. Enjoy !";
    }
}
