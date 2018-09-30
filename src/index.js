// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    const h = Math.floor(currency / 50);
    currency %= 50; 
    const q = Math.floor(currency / 25);
    currency %= 25;
    const d = Math.floor(currency/ 10);
    currency %= 10;
    const n = Math.floor(currency/ 5);
    currency %= 5;
    const p = currency;

    let coins = {};
    if (h) coins["H"] = h;
    if (q) coins["Q"] = q;
    if (d) coins["D"] = d;
    if (n) coins["N"] = n;
    if (p) coins["P"] = p;

    return coins;
}
