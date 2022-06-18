let coins = 0;
let perSecond = 0;

document.getElementById('btc').onclick = () => {
    document.getElementById('coins').innerText = coins + 1;
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

setInterval(() => {
    coins = coins + perSecond;
    document.getElementById('coins').innerText = coins;
}, 1000);