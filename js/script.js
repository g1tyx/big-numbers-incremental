// VARIABLES

game = {
    coins : 10,
    costIncrease : 1.3,

    diamonds: {
        amount: 0,
        onReset: 0,
        coinsNeeded: 10000000000000,
        increase: 4,
    },

    // COIN UPGRADES

    coinUpgrades : [
        {auto: false, cost: 10, amount: 0, bought: 0},
        {auto: false, cost: 100, amount: 0, bought: 0},
        {auto: false, cost: 10000, amount: 0, bought: 0},
        {auto: false, cost: 100000, amount: 0, bought: 0},
        {auto: false, cost: 1000000, amount: 0, bought: 0},
        {auto: false, cost: 10000000, amount: 0, bought: 0},
      ],

      // DIAMOND UPGRADES

    diamondUpgrades : [
        {cost: 1, bought: false, effect: 0.1},
        {cost: 5, bought: false, effect: 1},
        {cost: 20, bought: false, effect: 0},
        {cost: 50, bought: false, effect: false},
      ],

      // DIAMOND POWER

    power : {
        powerUpgrades : [
            { auto: false, cost: 1, amount: 0, bought: 0},
            { auto: false, cost: 10, amount: 0, bought: 0},
            { auto: false, cost: 100, amount: 0, bought: 0}
        ],

        amount: 0,
    },

    rubies: {
        amount: 0,
        onPrestige: 1,
        powerGen3Needed: 2,
        timesPrestiged: 0,
    },

    ticksUpgrade: {
        power: 0.2,
        amount: 0,
        bought: 0,
        cost: 1,
        ticks: 1000,
    },

}



setInterval(function setText() {

    // RESOURCES
    document.getElementById('coinsAmount').innerHTML = '<img src="img/coins.png" class="icons"> Coins: ' + format(game.coins);
    document.getElementById('diamondsAmount').innerHTML = '<img src="img/expense.png" class="icons"> Diamonds: ' + format(game.diamonds.amount);
    document.getElementById('powerAmount').innerHTML = '<img src="img/power.png" class="icons"> Power: ' + format(game.power.amount);
    document.getElementById('rubiesAmount').innerHTML = '<img src="img/ruby.png" class="icons"> Rubies: ' + format(game.rubies.amount);
    document.getElementById('ticksAmount').innerHTML = '<img src="img/ticks.png" class="icons"> Ticks: ' + format(game.ticksUpgrade.ticks);

    // COIN UPGRADES
    document.getElementById('coinUpgrade1').innerHTML = '<b>Coin Upgrade 1</b><br> Amount: ' + format(game.coinUpgrades[0].amount) + '<br>Bought: ' + format(game.coinUpgrades[0].bought) + '<br>Cost: ' + format(game.coinUpgrades[0].cost) + ' Coins';
    document.getElementById('coinUpgrade2').innerHTML = '<b>Coin Upgrade 2</b><br> Amount: ' + format(game.coinUpgrades[1].amount) + '<br>Bought: ' + format(game.coinUpgrades[1].bought) + '<br>Cost: ' + format(game.coinUpgrades[1].cost)+ ' Coins';
    document.getElementById('coinUpgrade3').innerHTML = '<b>Coin Upgrade 3</b><br> Amount: ' + format(game.coinUpgrades[2].amount) + '<br>Bought: ' + format(game.coinUpgrades[2].bought) + '<br>Cost: ' + format(game.coinUpgrades[2].cost)+ ' Coins';
    document.getElementById('coinUpgrade4').innerHTML = '<b>Coin Upgrade 4</b><br> Amount: ' + format(game.coinUpgrades[3].amount) + '<br>Bought: ' + format(game.coinUpgrades[3].bought) + '<br>Cost: ' + format(game.coinUpgrades[3].cost) + ' Coins';
    document.getElementById('coinUpgrade5').innerHTML = '<b>Coin Upgrade 5</b><br> Amount: ' + format(game.coinUpgrades[4].amount) + '<br>Bought: ' + format(game.coinUpgrades[4].bought) + '<br>Cost: ' + format(game.coinUpgrades[4].cost)+ ' Coins';
    document.getElementById('coinUpgrade6').innerHTML = '<b>Coin Upgrade 6</b><br> Amount: ' + format(game.coinUpgrades[5].amount) + '<br>Bought: ' + format(game.coinUpgrades[5].bought) + '<br>Cost: ' + format(game.coinUpgrades[5].cost)+ ' Coins';

    document.getElementById('resetButton').innerHTML = 'Reset Coins and Coin Upgrades to get Diamonds<br>You need 1.00e13 Diamonds to Reset<br>On reset you will gain ' + format(game.diamonds.onReset) + ' Diamonds';

    document.getElementById('prestigeButton').innerHTML = 'Prestige Coins and Diamonds for ' + format(game.rubies.onPrestige) + ' Rubies<br><br>Cost: ' + format(game.rubies.powerGen3Needed) + " Power Generator 3s<br>Times Prestiged: " + format(game.rubies.timesPrestiged);



    // POWER GENERATORS
    document.getElementById('pGen1Amount').innerHTML = 'Amount: ' + format(game.power.powerUpgrades[0].amount);
    document.getElementById('pGen1Cost').innerHTML = 'Cost: ' + format(game.power.powerUpgrades[0].cost) + ' Diamonds';

    document.getElementById('pGen2Amount').innerHTML ='Amount: ' + format(game.power.powerUpgrades[1].amount);
    document.getElementById('pGen2Cost').innerHTML = 'Cost: ' + format(game.power.powerUpgrades[1].cost) + ' Diamonds';

    document.getElementById('pGen3Amount').innerHTML = 'Amount: ' +format(game.power.powerUpgrades[2].amount);
    document.getElementById('pGen3Cost').innerHTML = 'Cost: ' + format(game.power.powerUpgrades[2].cost) + ' Diamonds';



    if( game.diamondUpgrades[3].bought == true){
    var element = document.getElementById('autoBuyButton');
    element.classList.remove('autoBuyNotBought');
    }
    
    if( game.diamondUpgrades[3].bought == false){
    var element = document.getElementById('autoBuyButton');
    element.classList.add('autoBuyNotBought');
    }

    //TICKS UPGRADE

    document.getElementById('ticksUpgradeButton').innerHTML = "Ticks Upgrade<br>Reduce Ticks by " + format(game.ticksUpgrade.power*100) + "%<br>Cost: " + format(game.ticksUpgrade.cost) + ' Rubies';

}, 40);

function du1(){
    if (game.diamondUpgrades[0].bought == true) {
        document.getElementById('effectText').innerHTML = 'Lower the Coin Upgrades cost increase<br> Bought';
    } else {
        document.getElementById('effectText').innerHTML = 'Lower the Coin Upgrades cost increase<br> Cost: ' + format(game.diamondUpgrades[0].cost) + ' Diamonds';
    }
};

function du2(){
    if (game.diamondUpgrades[1].bought == true) {
        document.getElementById('effectText').innerHTML = 'Coin Upgrade 6 produces double<br> Bought';

    } else {
        document.getElementById('effectText').innerHTML = 'Coin Upgrade 6 produces double<br> Cost: ' + format(game.diamondUpgrades[1].cost) + ' Diamonds';

    }
};


function du3(){

    if (game.diamondUpgrades[2].bought == true) {
        document.getElementById('effectText').innerHTML = 'Improve Diamond gain formula<br> Bought';

    } else {
        document.getElementById('effectText').innerHTML = 'Improve Diamond gain formula<br> Cost: ' + format(game.diamondUpgrades[2].cost) + ' Diamonds';

    }
};

function du4(){

    if (game.diamondUpgrades[3].bought == true) {
        document.getElementById('effectText').innerHTML = 'Unlock AutoBuy for Coin Upgrades<br> Bought';

    } else {
        document.getElementById('effectText').innerHTML = 'Unlock AutoBuy for Coin Upgrades<br> Cost: ' + format(game.diamondUpgrades[3].cost) + ' Diamonds';

    }
};



function beforeRubiesProductionLoop(){
    game.coins = game.coins + game.coinUpgrades[0].amount *  (1+game.power.amount/10000)
    game.coinUpgrades[0].amount = game.coinUpgrades[0].amount + game.coinUpgrades[1].amount;
    game.coinUpgrades[1].amount = game.coinUpgrades[1].amount + game.coinUpgrades[2].amount;
    game.coinUpgrades[2].amount = game.coinUpgrades[2].amount + game.coinUpgrades[3].amount;
    game.coinUpgrades[3].amount = game.coinUpgrades[3].amount + game.coinUpgrades[4].amount;
    game.coinUpgrades[4].amount = game.coinUpgrades[4].amount + game.coinUpgrades[5].amount * game.diamondUpgrades[1].effect;


    if (game.coins > game.diamonds.coinsNeeded) {
        game.diamonds.onReset = game.diamonds.onReset + 1;
        game.diamonds.coinsNeeded = game.diamonds.coinsNeeded * (game.diamonds.increase - game.diamondUpgrades[2].effect);
        
    }

    game.power.amount = game.power.amount + (game.power.powerUpgrades[0].amount / 100);
    game.power.powerUpgrades[0].amount = game.power.powerUpgrades[0].amount + (game.power.powerUpgrades[1].amount / 100);
    game.power.powerUpgrades[1].amount = game.power.powerUpgrades[1].amount + (game.power.powerUpgrades[2].amount / 100);


    //AUTOBUY
    if ( game.diamondUpgrades[3].effect == true){
        
        buyUpgrade6();
        buyUpgrade5();
        buyUpgrade4();
        buyUpgrade3();
        buyUpgrade2();
        buyUpgrade1();

    }

}

// GAME TIME 

setInterval(beforeRubiesProductionLoop, game.ticksUpgrade.ticks);

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
        game.coinUpgrades[0].cost = game.coinUpgrades[0].cost * game.costIncrease;

        var element = document.getElementById('coinUpgrade2');
        element.classList.remove('notVisible')
    
    }


}

function buyUpgrade2(){
    if ( game.coins >= game.coinUpgrades[1].cost ) {

        game.coins = game.coins - game.coinUpgrades[1].cost;
        game.coinUpgrades[1].amount++;
        game.coinUpgrades[1].bought++;
        game.coinUpgrades[1].cost = game.coinUpgrades[1].cost * (game.costIncrease + 0.1);

        var element = document.getElementById('coinUpgrade3');
        element.classList.remove('notVisible')
    
    }


}

function buyUpgrade3(){
    if ( game.coins >= game.coinUpgrades[2].cost ) {

        game.coins = game.coins - game.coinUpgrades[2].cost;
        game.coinUpgrades[2].amount++;
        game.coinUpgrades[2].bought++;
        game.coinUpgrades[2].cost = game.coinUpgrades[2].cost * (game.costIncrease + 0.2);


        var element = document.getElementById('coinUpgrade4');
        element.classList.remove('notVisible')
    
    }

}

function buyUpgrade4(){
    if ( game.coins >= game.coinUpgrades[3].cost ) {

        game.coins = game.coins - game.coinUpgrades[3].cost;
        game.coinUpgrades[3].amount++;
        game.coinUpgrades[3].bought++;
        game.coinUpgrades[3].cost = game.coinUpgrades[3].cost *(game.costIncrease + 0.3);


        var element = document.getElementById('coinUpgrade5');
        element.classList.remove('notVisible')
    
    }

}

function buyUpgrade5(){
    if ( game.coins >= game.coinUpgrades[4].cost ) {

        game.coins = game.coins - game.coinUpgrades[4].cost;
        game.coinUpgrades[4].amount++;
        game.coinUpgrades[4].bought++;
        game.coinUpgrades[4].cost = game.coinUpgrades[4].cost *(game.costIncrease + 0.4);


        var element = document.getElementById('coinUpgrade6');
        element.classList.remove('notVisible')
    
    }

}

function buyUpgrade6(){
    if ( game.coins >= game.coinUpgrades[5].cost ) {

        game.coins = game.coins - game.coinUpgrades[5].cost;
        game.coinUpgrades[5].amount++;
        game.coinUpgrades[5].bought++;
        game.coinUpgrades[5].cost = game.coinUpgrades[5].cost * (game.costIncrease + 0.5);


        if( game.coinUpgrades[5].amount >= 10){
            var element = document.getElementById('diamondsTabButton');
        element.classList.remove('notVisible')
        }
    
        if( game.coinUpgrades[5].amount >= 10){
            var element = document.getElementById('diamondsAmount');
        element.classList.remove('notVisible')
    
    }
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

    var element = document.getElementById('diamondStuff');
    element.classList.remove('notVisible')

    var element = document.getElementById('powerAmount');
    element.classList.remove('notVisible')

    }
}

// DIAMOND UPGRADES

function buyDU1(){

    if ( game.diamonds.amount >= game.diamondUpgrades[0].cost && game.diamondUpgrades[0].bought == false ) {
        game.diamonds.amount = game.diamonds.amount - game.diamondUpgrades[0].cost;
        game.diamondUpgrades[0].bought = true;

        //EFFECT
        game.costIncrease = game.costIncrease - game.diamondUpgrades[0].effect;

    }

}

function buyDU2(){

    if ( game.diamonds.amount >= game.diamondUpgrades[1].cost && game.diamondUpgrades[1].bought == false ) {
        game.diamonds.amount = game.diamonds.amount - game.diamondUpgrades[1].cost;
        game.diamondUpgrades[1].bought = true;

        //EFFECT
        game.diamondUpgrades[1].effect = 2;
    }

}

function buyDU3(){

    if ( game.diamonds.amount >= game.diamondUpgrades[2].cost && game.diamondUpgrades[2].bought == false ) {
        game.diamonds.amount = game.diamonds.amount - game.diamondUpgrades[2].cost;
        game.diamondUpgrades[2].bought = true;

        //EFFECT
        game.diamondUpgrades[2].effect = 0.3;
    }

}

function buyDU4(){

    if ( game.diamonds.amount >= game.diamondUpgrades[3].cost && game.diamondUpgrades[3].bought == false ) {
        game.diamonds.amount = game.diamonds.amount - game.diamondUpgrades[3].cost;
        game.diamondUpgrades[3].bought = true;
    }    }



// BUY POWER UPGRADES

function buyPU1(){
    if ( game.diamonds.amount >= game.power.powerUpgrades[0].cost ) {
        game.diamonds.amount = game.diamonds.amount - game.power.powerUpgrades[0].cost;
        game.power.powerUpgrades[0].amount = game.power.powerUpgrades[0].amount + 1;
        game.power.powerUpgrades[0].bought = game.power.powerUpgrades[0].bought + 1;
        game.power.powerUpgrades[0].cost = game.power.powerUpgrades[0].cost * 2.2;
    }
}

function buyPU2(){
    if ( game.diamonds.amount >= game.power.powerUpgrades[1].cost ) {
        game.diamonds.amount = game.diamonds.amount - game.power.powerUpgrades[1].cost;
        game.power.powerUpgrades[1].amount = game.power.powerUpgrades[1].amount + 1;
        game.power.powerUpgrades[1].bought = game.power.powerUpgrades[1].bought + 1;
        game.power.powerUpgrades[1].cost = game.power.powerUpgrades[1].cost * 2.2;
    }
}

function buyPU3(){
    if ( game.diamonds.amount >= game.power.powerUpgrades[2].cost ) {
        game.diamonds.amount = game.diamonds.amount - game.power.powerUpgrades[2].cost;
        game.power.powerUpgrades[2].amount = game.power.powerUpgrades[2].amount + 1;
        game.power.powerUpgrades[2].bought = game.power.powerUpgrades[2].bought + 1;
        game.power.powerUpgrades[2].cost = game.power.powerUpgrades[2].cost * 2.2;
    
        var element = document.getElementById('rubiesTabButton');
        element.classList.remove('notVisible')

        var element = document.getElementById('rubiesAmount');
        element.classList.remove('notVisible')
    }
}

if (game.power.powerUpgrades[2].bought >= 1){
    var element = document.getElementById('rubiesAmount')
    element.classList.remove('notVisible')
}

// AUTOBUY STUFF

function switchAutoBuy(){
    game.diamondUpgrades[3].effect = !game.diamondUpgrades[3].effect;

    if (game.diamondUpgrades[3].effect == true) {
        document.getElementById('autoBuyButton').innerHTML = "AutoBuy: ON"
    }
    
    if (game.diamondUpgrades[3].effect == false) {
        document.getElementById('autoBuyButton').innerHTML = "AutoBuy: OFF"
    }
}

function prestige(){

    if(game.diamondUpgrades[3].amonut >= game.rubies.powerGen3Needed){
    game.coins = 10;
    game.costIncrease = 1.3;

    game.diamonds = {
        amount: 0,
        onReset: 0,
        coinsNeeded: 10000000000000,
        increase: 4,
    };

    game.coinUpgrades = [
        {auto: false, cost: 10, amount: 0, bought: 0},
        {auto: false, cost: 100, amount: 0, bought: 0},
        {auto: false, cost: 10000, amount: 0, bought: 0},
        {auto: false, cost: 100000, amount: 0, bought: 0},
        {auto: false, cost: 1000000, amount: 0, bought: 0},
        {auto: false, cost: 10000000, amount: 0, bought: 0},
      ];

      game.diamondUpgrades = [
        {cost: 1, bought: false, effect: 0.1},
        {cost: 5, bought: false, effect: 1},
        {cost: 20, bought: false, effect: 0},
        {cost: 50, bought: false, effect: false},
      ];

      game.power.powerUpgrades = [
        { auto: false, cost: 1, amount: 0, bought: 0},
        { auto: false, cost: 10, amount: 0, bought: 0},
        { auto: false, cost: 100, amount: 0, bought: 0}
    ];

    game.power.amount = 0;

    game.rubies.amount = game.rubies.amount + game.rubies.onPrestige;
    game.rubies.powerGen3Needed = game.rubies.powerGen3Needed * 1.5;
    game.rubies.timesPrestiged = game.rubies.timesPrestiged + 1;
}
}

// TICKS

function ticksUpgrade(){
    if(game.rubies.amount >= game.ticksUpgrade.cost){
    game.rubies.amount = game.rubies.amount - game.ticksUpgrade.cost;

    game.ticksUpgrade.cost = game.ticksUpgrade.cost * 5;
    game.ticksUpgrade.ticks = game.ticksUpgrade.ticks - game.ticksUpgrade.power*game.ticksUpgrade.ticks;
}
setInterval(beforeRubiesProductionLoop, game.ticksUpgrade.ticks);
}