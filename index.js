amount = document.getElementById("donation_amount").value;
console.log(amount);

input = document.getElementById("donation_amount");

input.addEventListener('change', updateValue);
function updateValue(e) {
    if (e.target.value <= 50) {
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
info_needed_box = document.getElementById("info_needed_box");

function reset_info_needed_box() {
    var child = document.getElementById("input_wallet");
    if (child)
        info_needed_box.removeChild(child);
}


checkboxes[0].addEventListener("click", function (event) {
    help_box.innerText = "You want to donate the NFT to the NGO.";
    reset_info_needed_box();
    checkboxes[0].classList.add("checkbox_container_selected");
    checkboxes[1].classList.remove("checkbox_container_selected");
    checkboxes[2].classList.remove("checkbox_container_selected");
}, false);

checkboxes[1].addEventListener("click", function (event) {
    help_box.innerText = "You want to mint the NFT on your own wallet";

    reset_info_needed_box();
    const input_wallet = document.createElement('input');
    input_wallet.placeholder = "Metamask address";
    input_wallet.id = "input_wallet";
    input_wallet.className = "text_input";
    document.getElementById("info_needed_box").appendChild(input_wallet);

    checkboxes[0].classList.remove("checkbox_container_selected");
    checkboxes[1].classList.add("checkbox_container_selected");
    checkboxes[2].classList.remove("checkbox_container_selected");
}, false);

checkboxes[2].addEventListener("click", function (event) {
    help_box.innerText = "We store the NFT for you, you get it back whenever you want";

    reset_info_needed_box();

    checkboxes[0].classList.remove("checkbox_container_selected");
    checkboxes[1].classList.remove("checkbox_container_selected");
    checkboxes[2].classList.add("checkbox_container_selected");
}, false);

nexts = document.getElementsByClassName("next");

nexts[1].addEventListener("click", function (event) {
    step = document.getElementById("step_1");
    step.style.background = "linear-gradient(0.15turn, #06DBAC, #BD00FF)";

});

nexts[2].addEventListener("click", function (event) {
    step = document.getElementById("step_2");
    step.style.background = "linear-gradient(0.15turn, #06DBAC, #BD00FF)";

});

nexts[3].addEventListener("click", function (event) {
    step = document.getElementById("step_3");
    step.style.background = "linear-gradient(0.15turn, #06DBAC, #BD00FF)";

});

nexts[4].addEventListener("click", function (event) {
    step = document.getElementById("step_4");
    step.style.background = "linear-gradient(0.15turn, #06DBAC, #BD00FF)";

});
