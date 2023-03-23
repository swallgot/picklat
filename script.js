const input = document.getElementById('amount');
const more = document.getElementById('more');
const less = document.getElementById('less');
const attikSprit = document.getElementById('attikSprit');
const sugar = document.getElementById('sugar');
const water = document.getElementById('water');
const onion = document.getElementById('onion');
var value = parseInt(input.value, 10);

var valueAttikSprit = 1;
var valueSugar = 2;
var valueWater = 3;
var valueOnion = 2;

more.addEventListener('click', function() {
    value++;
    
    input.value = value;

    valueAttikSprit += 1/7;
    attikSprit.innerHTML = Math.round(valueAttikSprit * 10) / 10 + " dl";

    valueSugar += 2/7;
    sugar.innerHTML = Math.round(valueSugar * 10) / 10 + " dl";

    valueWater += 3/7;
    water.innerHTML = Math.round(valueWater * 10) / 10 + " dl";

    valueOnion += 2/7;
    onion.innerHTML = Math.round(valueOnion * 10) / 10 + " st";
});

less.addEventListener('click', function() {
    if (input.value > 1) {
        value--;

        input.value = value;

        valueAttikSprit -= 1/7;
        attikSprit.innerHTML = Math.round(valueAttikSprit * 10) / 10 + " dl";

        valueSugar -= 2/7;
        sugar.innerHTML = Math.round(valueSugar * 10) / 10 + " dl";

        valueWater -= 3/7;
        water.innerHTML = Math.round(valueWater * 10) / 10 + " dl";

        valueOnion -= 2/7;
        onion.innerHTML = Math.round(valueOnion * 10) / 10 + " st";
    }
});

input.addEventListener('change', function() {
});