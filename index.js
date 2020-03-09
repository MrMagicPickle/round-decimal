'''
https://stackoverflow.com/questions/4912788/truncate-not-round-off-decimal-numbers-in-javascript
'''
const round_nearest = function (n, multiple) {
    return Math.round(n / multiple) * multiple
}

const truncateDecimals = function (number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
};



let a = 5.5;
let b = 6.3;
let c = 5.03;

let arr = [5.03, 5.65, 5.9, 4.23]
arr.forEach(x => console.log((round_nearest(x, 0.05)))
//console.log(round_nearest(c, 0.1))
//console.log(Math.round(a), Math.round(b))


