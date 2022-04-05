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
        document.getElementById("rarity_description").innerHTML = "Common NFT<br /> The first step to donation, good job you !";
    } else if (e.target.value <= 100 && e.target.value > 50) {
        document.getElementById("1").style.opacity = "30%";
        document.getElementById("2").style.opacity = "100%";
        document.getElementById("3").style.opacity = "30%";
        document.getElementById("4").style.opacity = "30%";
        document.getElementById("rarity_description").innerHTML = "Rare NFT<br /> A nice NFT for a nice donation, thank you !";
    } else if (e.target.value <= 200 && e.target.value > 100) {
        document.getElementById("1").style.opacity = "30%";
        document.getElementById("2").style.opacity = "30%";
        document.getElementById("3").style.opacity = "100%";
        document.getElementById("4").style.opacity = "30%";
        document.getElementById("rarity_description").innerHTML = "Epic NFT<br /> Well, that's an epic move right there. Thanks champ !";
    } else if (e.target.value > 200) {
        document.getElementById("1").style.opacity = "30%";
        document.getElementById("2").style.opacity = "30%";
        document.getElementById("3").style.opacity = "30%";
        document.getElementById("4").style.opacity = "100%";
        document.getElementById("rarity_description").innerHTML = "Metafunds King NFT<br /> King of Metfunds, we salute you.";
    }
}

checkboxes = document.getElementsByClassName("checkbox_container");
help_box = document.getElementById("help_box");

checkboxes[0].addEventListener("mouseenter", function (event) {
    help_box.innerText = "You want to donate the NFT to the NGO.\n This is very genereous of you.";
}, false);
checkboxes[1].addEventListener("mouseenter", function (event) {
    help_box.innerText = "You want to mint the NFT on your own wallet";
}, false);
checkboxes[2].addEventListener("mouseenter", function (event) {
    help_box.innerText = "We store the NFT for you, you get it back whenever you want";
}, false);
