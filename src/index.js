module.exports = function toReadable (number) {
    var min_num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var dec_num = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var hund = "hundred";
    var res = [];
    if(number === 0)
    	return "zero";
    if(number >= 100) {
        res.push(min_num[Math.floor(number / 100)]);
        res.push(hund);
        number = number % 100;
    }
    if (number >= 20) {
        res.push(dec_num[Math.floor(number / 10) - 2]);
        if (number % 10 > 0) 
            res.push(min_num[number % 10]);
    }
    else if (number > 0)
        res.push(min_num[number]);
    return res.join(' ');
}
