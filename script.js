// VARIABLES

game = {
    coins : 10,

    diamonds: {
        amount: 0,
        onReset: 0,
        coinsNeeded: 10000000000000,
    },

    // COIN UPGRADES

    coinUpgrades : [
        {cost: 10, amount: 0, bought: 0},
        {cost: 100, amount: 0, bought: 0},
        {cost: 10000, amount: 0, bought: 0},
        {cost: 100000, amount: 0, bought: 0},
        {cost: 1000000, amount: 0, bought: 0},
        {cost: 10000000, amount: 0, bought: 0}
      ]
}



setInterval(function setText() {

    // RESOURCES
    document.getElementById('coinsAmount').innerHTML = 'Coins: ' + format(game.coins);
    document.getElementById('diamondsAmount').innerHTML = 'Diamonds: ' + format(game.diamonds.amount);

    // COIN UPGRADES
    document.getElementById('coinUpgrade1').innerHTML = '<b>Coin Upgrade 1</b><br> Amount: ' + format(game.coinUpgrades[0].amount) + '<br>Bought: ' + format(game.coinUpgrades[0].bought) + '<br>Cost: ' + format(game.coinUpgrades[0].cost) + ' Coins';
    document.getElementById('coinUpgrade2').innerHTML = '<b>Coin Upgrade 2</b><br> Amount: ' + format(game.coinUpgrades[1].amount) + '<br>Bought: ' + format(game.coinUpgrades[1].bought) + '<br>Cost: ' + format(game.coinUpgrades[1].cost)+ ' Coins';
    document.getElementById('coinUpgrade3').innerHTML = '<b>Coin Upgrade 3</b><br> Amount: ' + format(game.coinUpgrades[2].amount) + '<br>Bought: ' + format(game.coinUpgrades[2].bought) + '<br>Cost: ' + format(game.coinUpgrades[2].cost)+ ' Coins';
    document.getElementById('coinUpgrade4').innerHTML = '<b>Coin Upgrade 4</b><br> Amount: ' + format(game.coinUpgrades[3].amount) + '<br>Bought: ' + format(game.coinUpgrades[3].bought) + '<br>Cost: ' + format(game.coinUpgrades[3].cost) + ' Coins';
    document.getElementById('coinUpgrade5').innerHTML = '<b>Coin Upgrade 5</b><br> Amount: ' + format(game.coinUpgrades[4].amount) + '<br>Bought: ' + format(game.coinUpgrades[4].bought) + '<br>Cost: ' + format(game.coinUpgrades[4].cost)+ ' Coins';
    document.getElementById('coinUpgrade6').innerHTML = '<b>Coin Upgrade 6</b><br> Amount: ' + format(game.coinUpgrades[5].amount) + '<br>Bought: ' + format(game.coinUpgrades[5].bought) + '<br>Cost: ' + format(game.coinUpgrades[5].cost)+ ' Coins';

    document.getElementById('resetButton').innerHTML = 'Reset Coins and Coin Upgrades to get Diamonds<br>You need 1.00e13 Diamonds to Reset<br>On reset you will gain ' + format(game.diamonds.onReset) + ' Diamonds'
}, 40);


function productionLoop(){
    game.coins = game.coins + game.coinUpgrades[0].amount;
    game.coinUpgrades[0].amount = game.coinUpgrades[0].amount + game.coinUpgrades[1].amount;
    game.coinUpgrades[1].amount = game.coinUpgrades[1].amount + game.coinUpgrades[2].amount;
    game.coinUpgrades[2].amount = game.coinUpgrades[2].amount + game.coinUpgrades[3].amount;
    game.coinUpgrades[3].amount = game.coinUpgrades[3].amount + game.coinUpgrades[4].amount;
    game.coinUpgrades[4].amount = game.coinUpgrades[4].amount + game.coinUpgrades[5].amount;


    if (game.coins > game.diamonds.coinsNeeded) {
        game.diamonds.onReset = game.diamonds.onReset + 1;
        game.diamonds.coinsNeeded = game.diamonds.coinsNeeded * 3.5;
        
    }

}

setInterval(productionLoop, 40);

// FORMATING NUMBERS

function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed(2)
    return mantissa.toFixed(2) + "e" + power
}

// SAVING & LOADING

function saveGame(){
    localStorage.setItem("data", JSON.stringify(game))
}

function loadGame(){
    game = JSON.parse(localStorage.getItem("data"))
}

// TABS

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => tabContent.classList.remove('active'))
        tabs.forEach(tab => tab.classList.remove('active'))
        target.classList.add('active')
        tab.classList.add('active')
    })
})

// BUYING COIN UPGRADES

function buyUpgrade1(){
    if ( game.coins >= game.coinUpgrades[0].cost ) {

        game.coins = game.coins - game.coinUpgrades[0].cost;
        game.coinUpgrades[0].amount++;
        game.coinUpgrades[0].bought++;
        game.coinUpgrades[0].cost = game.coinUpgrades[0].cost * 1.3;
    }

}

function buyUpgrade2(){
    if ( game.coins >= game.coinUpgrades[1].cost ) {

        game.coins = game.coins - game.coinUpgrades[1].cost;
        game.coinUpgrades[1].amount++;
        game.coinUpgrades[1].bought++;
        game.coinUpgrades[1].cost = game.coinUpgrades[1].cost * 1.4;
    }

}

function buyUpgrade3(){
    if ( game.coins >= game.coinUpgrades[2].cost ) {

        game.coins = game.coins - game.coinUpgrades[2].cost;
        game.coinUpgrades[2].amount++;
        game.coinUpgrades[2].bought++;
        game.coinUpgrades[2].cost = game.coinUpgrades[2].cost * 1.5;
    }

}

function buyUpgrade4(){
    if ( game.coins >= game.coinUpgrades[3].cost ) {

        game.coins = game.coins - game.coinUpgrades[3].cost;
        game.coinUpgrades[3].amount++;
        game.coinUpgrades[3].bought++;
        game.coinUpgrades[3].cost = game.coinUpgrades[3].cost * 1.6;
    }

}

function buyUpgrade5(){
    if ( game.coins >= game.coinUpgrades[4].cost ) {

        game.coins = game.coins - game.coinUpgrades[4].cost;
        game.coinUpgrades[4].amount++;
        game.coinUpgrades[4].bought++;
        game.coinUpgrades[4].cost = game.coinUpgrades[4].cost * 1.7;
    }

}

function buyUpgrade6(){
    if ( game.coins >= game.coinUpgrades[5].cost ) {

        game.coins = game.coins - game.coinUpgrades[5].cost;
        game.coinUpgrades[5].amount++;
        game.coinUpgrades[5].bought++;
        game.coinUpgrades[5].cost = game.coinUpgrades[5].cost * 1.8;
    }

}

function reset(){

    if ( game.coins >= 10000000000000 ) {
    game.diamonds.amount = game.diamonds.amount + game.diamonds.onReset;
    game.diamonds.onReset = 0;
    game.diamonds.coinsNeeded = 10000000000000;

    game.coins = 10;
    game.coinUpgrades[0].amount = 0;
    game.coinUpgrades[0].bought = 0;

    game.coinUpgrades[1].amount = 0;
    game.coinUpgrades[1].bought = 0;

    game.coinUpgrades[2].amount = 0;
    game.coinUpgrades[2].bought = 0;

    game.coinUpgrades[3].amount = 0;
    game.coinUpgrades[3].bought = 0;

    game.coinUpgrades[4].amount = 0;
    game.coinUpgrades[4].bought = 0;

    game.coinUpgrades[5].amount = 0;
    game.coinUpgrades[5].bought = 0;

    game.coinUpgrades[0].cost = 10;
    game.coinUpgrades[1].cost = 100;
    game.coinUpgrades[2].cost = 1000;
    game.coinUpgrades[3].cost = 10000;
    game.coinUpgrades[4].cost = 100000;
    game.coinUpgrades[5].cost = 1000000;
    }
}