
// KilometerToMeter function

function KilometerToMeter(kiloMeter) {
    if (kiloMeter < 0) {
        return "Enter a nonnegative km value please."
    }
    else {
        var meter = kiloMeter * 1000;
    }
    return meter;
}
// console.log(KilometerToMeter(23));

// budgetCalculator function

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Please enter valid number.";
    }
    else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        total = watchPrice + phonePrice + laptopPrice;

    }


    return total;

}
// console.log(budgetCalculator(10, 6, 2));

// hotelCost function

function hotelCost(day) {
    if (day < 0) {
        return "Wrong input. Cheack Again.";
    }

    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        cost = (10 * 100) + (day - 10) * 80;

    }
    else if (day > 20) {
        cost = (10 * 100) + (10 * 80) + (day - 20) * 50;
    }
    return cost;

}
// console.log(hotelCost(30));

// megaFriend Function

function megaFriend(friends) {
    if (friends.length == 0) {
        return "Enter a valid list please."
    }
    var mega = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > mega.length) {
            mega = friends[i];
        }

    }
    return mega;
}
// var friends = ['Anisul Islam', 'Shariful', 'kali'];
// console.log(megaFriend(friends));
