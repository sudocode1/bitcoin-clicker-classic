let coins = 0;
let perSecond = 0;
let perSecondPercentageIncrease = 0;


let etherUnlocked = false;
let ethereum = 0;
let etherPerSecond = 0;
let etherVSbtc = Math.round(Math.random() * 1000);
document.getElementById('etherExchange').innerText = etherVSbtc + ' ETH';

let events = [
    'CHILD_ESCAPE', 
    'GALAXY_IMPLODE', 
    'COUNTRY_WAR', 
    'BLACKHOLE', 
    'CRIMINALS_STEAL_SOME', 
    'CRIMINALS_STEAL_ALL', 
    'FARMER_REVOLT',
    'LOSE_FRIENDS',
    'LOSE_VERY_FRIENDS',
    'FRAUD_ACCUSATION',
    'COSMOS_DEATH',
    'FALLEN_ANGEL',
    'CHILD_REVOLT',
    'SAMSUNG_COPYRIGHT_STRIKE',
    'BANK_ROBBERY',
    'WORKER_REVOLT',
    'ASTEROID_HITS_PLANET',
    'HOTEL_BOMBED',
    'FACTORY_EXPLODES'
];

let eventLog = [];

function updateEventLog() {
    document.getElementById('eventlogger').innerHTML = '';
    eventLog.forEach(event => {
        document.getElementById('eventlogger').innerHTML += `<div style="border: solid 1px black; width:900px; height:20px; ">
        <span>
            ${event}
        </span>
    </div>`;
    });
}

document.getElementById('btc').onclick = () => {
    document.getElementById('coins').innerText = coins + 1;
    document.getElementById('coins').innerText = coins;
    coins++; 
}

document.getElementById('purchaseOne').onclick = () => {
    if (coins < 100) {
        return;
    }
    coins = coins - 100;
    perSecond = perSecond + 1;
    document.getElementById('oneAmount').innerText = parseInt(document.getElementById('oneAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseTwo').onclick = () => {
    if (coins < 200) {
        return;
    }
    coins = coins - 200;
    perSecond = perSecond + 2;
    document.getElementById('twoAmount').innerText = parseInt(document.getElementById('twoAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseThree').onclick = () => {
    if (coins < 500) {
        return;
    }
    coins = coins - 500;
    perSecond = perSecond + 4;
    document.getElementById('threeAmount').innerText = parseInt(document.getElementById('threeAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseFour').onclick = () => {
    if (coins < 1000) {
        return;
    }
    coins = coins - 1000;
    perSecond = perSecond + 7;
    document.getElementById('fourAmount').innerText = parseInt(document.getElementById('fourAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseFive').onclick = () => {
    if (coins < 1200) {
        return;
    }
    coins = coins - 1200;
    perSecond = perSecond + 10;
    document.getElementById('fiveAmount').innerText = parseInt(document.getElementById('fiveAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseSix').onclick = () => {
    if (coins < 2000) {
        return;
    }
    coins = coins - 2000;
    perSecond = perSecond + 15;
    document.getElementById('sixAmount').innerText = parseInt(document.getElementById('sixAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseSeven').onclick = () => {
    if (coins < 3500) {
        return;
    }
    coins = coins - 3500
    perSecond = perSecond + 30;
    document.getElementById('sevenAmount').innerText = parseInt(document.getElementById('sevenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseEight').onclick = () => {
    if (coins < 4500) {
        return;
    }
    coins = coins - 4500;
    perSecond = perSecond + 40;
    document.getElementById('eightAmount').innerText = parseInt(document.getElementById('eightAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseNine').onclick = () => {
    if (coins < 5500) {
        return;
    }
    coins = coins - 5500;
    perSecond = perSecond + 50;
    document.getElementById('nineAmount').innerText = parseInt(document.getElementById('nineAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseTen').onclick = () => {
    if (coins < 8000) {
        return;
    }
    coins = coins - 8000;
    perSecond = perSecond + 75; 
    document.getElementById('tenAmount').innerText = parseInt(document.getElementById('tenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseEleven').onclick = () => {
    if (coins < 12000) {
        return;
    }
    coins = coins - 12000;
    perSecond = perSecond + 100;
    document.getElementById('elevenAmount').innerText = parseInt(document.getElementById('elevenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseTwelve').onclick = () => {
    if (coins < 15000) {
        return;
    }
    coins = coins - 15000;
    perSecond = perSecond + 120;
    document.getElementById('twelveAmount').innerText = parseInt(document.getElementById('twelveAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseThirteen').onclick = () => {
    if (coins < 17500) {
        return;
    }
    coins = coins - 17500;
    perSecond = perSecond + 150;
    document.getElementById('thirteenAmount').innerText = parseInt(document.getElementById('thirteenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseFourteen').onclick = () => {
    if (coins < 25000) {
        return;
    }
    coins = coins - 25000;
    perSecond = perSecond + 200;
    document.getElementById('fourteenAmount').innerText = parseInt(document.getElementById('fourteenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseFifteen').onclick = () => {
    if (coins < 30000) {
        return;
    }
    coins = coins - 30000;
    perSecond = perSecond + 250;
    document.getElementById('fifteenAmount').innerText = parseInt(document.getElementById('fifteenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseSixteen').onclick = () => {
    if (coins < 35000) {
        return;
    }
    coins = coins - 35000;
    perSecond = perSecond + 300;
    document.getElementById('sixteenAmount').innerText = parseInt(document.getElementById('sixteenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseSeventeen').onclick = () => {
    if (coins < 45000) {
        return;
    }
    coins = coins - 45000;
    perSecond = perSecond + 400;
    document.getElementById('seventeenAmount').innerText = parseInt(document.getElementById('seventeenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseEighteen').onclick = () => {
    if (coins < 60000) {
        return;
    }
    coins = coins - 60000;
    perSecond = perSecond + 500;
    document.getElementById('eighteenAmount').innerText = parseInt(document.getElementById('eighteenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseNineteen').onclick = () => {
    if (coins < 200000) {
        return;
    }
    coins = coins - 200000;
    perSecond = perSecond + 1000;
    document.getElementById('nineteenAmount').innerText = parseInt(document.getElementById('nineteenAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseTwenty').onclick = () => {
    if (coins < 1500000) {
        return; 
    }
    coins = coins - 1500000;
    perSecond = perSecond + 10000;
    document.getElementById('twentyAmount').innerText = parseInt(document.getElementById('twentyAmount').innerText) + 1;
    document.getElementById('coins').innerText = coins;
}

document.getElementById('purchaseEthereum').onclick = () => {
    if (etherUnlocked) return;
    if (coins < 150000000) return;
    coins = coins - 150000000;
    etherUnlocked = true;
    etherPurchasedLabel.innerText = "purchased";
    document.getElementById('etherimg').style.display = "initial";
    document.getElementById('numbers').innerHTML += `<span>number of ethereum: <span id="ethereumAmount">0</span></span> <br>`;
    document.getElementById('numbers').innerHTML += `<span>ethereum per second: <span id="ethereumPerSecond">0</span></span>/second <br> `;
    document.getElementById('etherimg').onclick = () => {
        ethereum++;
        document.getElementById('ethereumAmount').innerHTML = ethereum;
    }

    document.getElementById('excBTCtoETH').onclick = () => {
        if (!isNaN(parseFloat(document.getElementById('btcethamount').value))) {
            if (parseFloat(document.getElementById('btcethamount').value) <= coins) {
                // exchange btc for ethereum
                coins = coins - parseFloat(document.getElementById('btcethamount').value);
                ethereum = ethereum + (parseFloat(document.getElementById('btcethamount').value) * etherVSbtc);
            }
        }
        document.getElementById('coins').innerText = coins;
        document.getElementById('ethereumAmount').innerText = ethereum;
    }

    document.getElementById('excETHtoBTC').onclick = () => {
        if (!isNaN(parseFloat(document.getElementById('btcethamount').value))) {
            if (parseFloat(document.getElementById('btcethamount').value) <= ethereum) {
                // exchange ethereum for btc
                ethereum = ethereum - parseFloat(document.getElementById('btcethamount').value);
                coins = coins + (parseFloat(document.getElementById('btcethamount').value) / etherVSbtc);
            }
        }
        document.getElementById('coins').innerText = coins;
        document.getElementById('ethereumAmount').innerText = ethereum;
    }
}

document.getElementById('purchaseBTCMiningCookie').onclick = () => {
    if (ethereum < 500000000000) return;
    let btcMiningCookiesAmount = parseInt(document.getElementById('btcMiningCookies').innerText);
    if (btcMiningCookiesAmount == 100) return;

    ethereum = ethereum - 500000000000;
    document.getElementById('btcMiningCookies').innerText = btcMiningCookiesAmount + 1;
    perSecondPercentageIncrease = perSecondPercentageIncrease + 1;
    document.getElementById('ethereumAmount').innerHTML = ethereum;
}

document.getElementById('purchaseBTCMiningBakery').onclick = () => {
    if (ethereum < 2500000000000) return;
    let btcMiningBakeryAmount = parseInt(document.getElementById('btcMiningBakery').innerText);
    if (btcMiningBakeryAmount == 100) return;

    ethereum = ethereum - 2500000000000;
    document.getElementById('btcMiningBakery').innerText = btcMiningBakeryAmount + 1;
    perSecondPercentageIncrease = perSecondPercentageIncrease + 5;
    document.getElementById('ethereumAmount').innerHTML = ethereum;
}

document.getElementById('purchaseBTCBakeryBusiness').onclick = () => {
    if (ethereum < 5000000000000) return;
    let btcBakeryBusinessAmount = parseInt(document.getElementById('btcBakeryBusiness').innerText);
    if (btcBakeryBusinessAmount == 100) return;

    ethereum = ethereum - 5000000000000;
    document.getElementById('btcBakeryBusiness').innerText = btcBakeryBusinessAmount + 1;
    perSecondPercentageIncrease = perSecondPercentageIncrease + 10;
    document.getElementById('ethereumAmount').innerHTML = ethereum;
}

document.getElementById('purchaseBTCBakeryFrachise').onclick = () => {
    if (ethereum < 12500000000000) return;
    let btcBakeryFrachiseAmount = parseInt(document.getElementById('btcBakeryFrachise').innerText);
    if (btcBakeryFrachiseAmount == 100) return;

    ethereum = ethereum - 12500000000000;
    document.getElementById('btcBakeryFrachise').innerText = btcBakeryFrachiseAmount + 1;
    perSecondPercentageIncrease = perSecondPercentageIncrease + 25;
    document.getElementById('ethereumAmount').innerHTML = ethereum;
}

document.getElementById('purchaseBTCGoldenCookie').onclick = () => {
    if (ethereum < 25000000000000) return;
    let btcGoldenCookieAmount = parseInt(document.getElementById('btcGoldenCookie').innerText);

    if (btcGoldenCookieAmount == 100) return;
    ethereum = ethereum - 25000000000000;
    document.getElementById('btcGoldenCookie').innerText = btcGoldenCookieAmount + 1;
    perSecondPercentageIncrease = perSecondPercentageIncrease + 50;
    document.getElementById('ethereumAmount').innerHTML = ethereum;
}

document.getElementById('purchaseLaptop').onclick = () => {
    if (ethereum < 100000000) return;
    let laptopAmount = parseInt(document.getElementById('laptopAmount').innerText);

    if (laptopAmount == 100) return;
    ethereum = ethereum - 100000000;
    document.getElementById('laptopAmount').innerText = laptopAmount + 1;
    etherPerSecond = etherPerSecond + 100000;
    document.getElementById('ethereumAmount').innerHTML = ethereum;
}

// document.getElementById('toggleBTCStore').onclick = () => {
//     if (document.getElementById('BTCcontainer').style.visibility == "hidden") {
//         document.getElementById('BTCcontainer').style.visibility = "initial";
//     } else {
//         document.getElementById('BTCcontainer').style.visibility = "hidden";
//     }
// }

// document.getElementById('toggleETHStore').onclick = () => {
//     if (document.getElementById('ETHcontainer').style.visibility == "hidden") {
//         document.getElementById('ETHcontainer').style.visibility = "initial";
//     } else {
//         document.getElementById('ETHcontainer').style.visibility = "hidden";
//     }
// }

setInterval(() => {
    coins = coins + perSecond + (perSecond * (perSecondPercentageIncrease / 100));
    document.getElementById('coins').innerText = coins;
    document.getElementById('coinsPerSecond').innerText = perSecond + '/second' + ' (+' + perSecondPercentageIncrease + '%, total: ' + (perSecond + (perSecond * (perSecondPercentageIncrease / 100))) + '/second)';

    try {
        ethereum = ethereum + etherPerSecond;

        document.getElementById('ethereumAmount').innerText = ethereum;
        document.getElementById('ethereumPerSecond').innerText = etherPerSecond;
    } catch(e) {

    } 


}, 1000);

setInterval(() => {
    etherVSbtc = Math.round(Math.random() * 1000);
    document.getElementById('etherExchange').innerText = etherVSbtc + ' ETH';
}, 10000);

setInterval(() => {
    let number_of_chance = Math.round(Math.random() * 100);
    //let number_of_chance = 100;
    //console.log(number_of_chance)
    if (number_of_chance == 56) {
        let event = events[Math.floor(Math.random() * events.length)];
        console.log(event);
        switch (event) {
            case 'CHILD_ESCAPE':
                if (parseInt(document.getElementById('twoAmount').innerText) > 0) {
                    document.getElementById('twoAmount').innerText = parseInt(document.getElementById('twoAmount').innerText) - 1;
                    perSecond = perSecond - 2;
                    eventLog.unshift('a child escaped');
                }
            break;

            case 'GALAXY_IMPLODE':
                if (parseInt(document.getElementById('twelveAmount').innerText) > 0) {
                    document.getElementById('twelveAmount').innerText = parseInt(document.getElementById('twoAmount').innerText) - 1;
                    perSecond = perSecond - 120;
                    eventLog.unshift('a galaxy imploded');
                }
            break;

            case 'COUNTRY_WAR':
                if (parseInt(document.getElementById('nineAmount').innerText) > 0) {
                    document.getElementById('nineAmount').innerText = parseInt(document.getElementById('nineAmount').innerText) - 1;
                    perSecond = perSecond - 50;
                    eventLog.unshift('a war broke out in one of your countries');
                }
            break;
                
            case 'BLACKHOLE':
                coins = coins / 2;
                document.getElementById('coins').innerText = coins;
                eventLog.unshift('a black hole took your money');
            break;

            case 'CRIMINALS_STEAL_SOME':
                if (parseInt(document.getElementById('sevenAmount').innerText) == 0) return;
                let coinsStolen = Math.round(Math.random() * coins);
                coins = coins - coinsStolen;
                document.getElementById('coins').innerText = coins;
                eventLog.unshift('some criminals stole some coins');
            break;

            case 'CRIMINALS_STEAL_ALL': 
                if (parseInt(document.getElementById('sevenAmount').innerText) == 0) return;
                coins = 0;
                document.getElementById('coins').innerText = coins;
                
                let amountOfCriminals = parseInt(document.getElementById('sevenAmount').innerText);
                perSecond = perSecond - (30 * amountOfCriminals);
                document.getElementById('sevenAmount').innerText = 0;
                eventLog.unshift('all your criminals stole all your money and ditched you');
            break;
            
            case 'FARMER_REVOLT':
                if (parseInt(document.getElementById('threeAmount').innerText) > 0) {
                    document.getElementById('threeAmount').innerText = parseInt(document.getElementById('threeAmount').innerText) - 1;
                    perSecond = perSecond - 4;
                    eventLog.unshift('a farmer revolted');
                }
            break;

            case 'LOSE_FRIENDS':
                if (parseInt(document.getElementById('oneAmount').innerText) > 0) {
                    let friendsLost = Math.round(Math.random() * parseInt(document.getElementById('oneAmount').innerText));
                    document.getElementById('oneAmount').innerText = parseInt(document.getElementById('oneAmount').innerText) - friendsLost;
                    perSecond = perSecond - (friendsLost * 1);
                    eventLog.unshift('you lost some generous friends');
                }
            break;

            case 'LOSE_VERY_FRIENDS':
                if (parseInt(document.getElementById('twentyAmount').innerText) > 0) {
                    let friendsLost = Math.round(Math.random() * parseInt(document.getElementById('twentyAmount').innerText));
                    document.getElementById('oneAmount').innerText = parseInt(document.getElementById('twentyAmount').innerText) - friendsLost;
                    perSecond = perSecond - (friendsLost * 10000);
                    eventLog.unshift('you lost some very generous friends');
                }
            break;

            case 'FRAUD_ACCUSATION':
                coins = 0;
                document.getElementById('coins').innerText = coins;
                eventLog.unshift('you got caught for fraud and lost all your money');
            break;

            case 'COSMOS_DEATH':
                coins = 0;
                document.getElementById('coins').innerText = coins;

                ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
                .forEach(number => {
                    document.getElementById(number + 'Amount').innerText = 0;
                });

                perSecond = 0;
                eventLog.unshift('you lost everything because of a cosmic death');
            break;

            case 'FALLEN_ANGEL':
                if (parseInt(document.getElementById('sixteenAmount').innerText) > 0) {
                    document.getElementById('sixteenAmount').innerText = parseInt(document.getElementById('sixteenAmount').innerText) - 1;
                    perSecond = perSecond - 300;
                    eventLog.unshift('one of your angels fell');
                }
            break;

            case 'CHILD_REVOLT':
                let numberOfChildren = parseInt(document.getElementById('twoAmount').innerText);
                if (numberOfChildren == 0) return;
                document.getElementById('twoAmount').innerText = 0;
                perSecond = perSecond - (numberOfChildren * 2);
                eventLog.unshift('your children revolted');
            break;

            case 'SAMSUNG_COPYRIGHT_STRIKE':
                if (parseInt(document.getElementById('twelveAmount').innerText) > 0) {
                    document.getElementById('twelveAmount').innerText = parseInt(document.getElementById('sixteenAmount').innerText) - 1;
                    perSecond = perSecond - 120;
                    eventLog.unshift('a copyright strike by samsung made you lose a galaxy');
                }
            break;

            case 'BANK_ROBBERY':
                if (parseInt(document.getElementById('sixAmount').innerText) > 0) {
                    document.getElementById('sixAmount').innerText = parseInt(document.getElementById('sixteenAmount').innerText) - 1;
                    perSecond = perSecond - 15;
                    eventLog.unshift('a bank robbery made you lose money');
                }
            break;

            case 'WORKER_REVOLT':
                if (parseInt(document.getElementById('fourAmount').innerText) > 0) {
                    document.getElementById('fourAmount').innerText = parseInt(document.getElementById('fourAmount').innerText) - 1;
                    perSecond = perSecond - 7;
                    eventLog.unshift('a worker revolted');
                }
            break;

            case 'ASTEROID_HITS_PLANET':
                if (parseInt(document.getElementById('elevenAmount').innerText) > 0) {
                    document.getElementById('elevenAmount').innerText = parseInt(document.getElementById('elevenAmount').innerText) - 1;
                    perSecond = perSecond - 100;
                    eventLog.unshift('an asteroid hit one of your planets');
                }
            break;

            case 'HOTEL_BOMBED':
                // sounds familiar
                if (parseInt(document.getElementById('eightAmount').innerText) > 0) {
                    document.getElementById('eightAmount').innerText = parseInt(document.getElementById('eightAmount').innerText) - 1;
                    perSecond = perSecond - 40;
                    eventLog.unshift('a hotel was bombed');
                }

            break;

            case 'FACTORY_EXPLODES':
                if (parseInt(document.getElementById('fourAmount').innerText) > 0) {
                    document.getElementById('fourAmount').innerText = parseInt(document.getElementById('fourAmount').innerText) - 1;
                    perSecond = perSecond - 7;
                    eventLog.unshift('a factory exploded');
                }
            break;
        }
    }

    updateEventLog();
}, 1000);