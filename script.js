// let age;

// const yearOfBirth = 2006;
// console.log(yearOfBirth);

// let a = 27 % 6;
// console.log(a);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
// }


// const courseTopic = 'JavaSript для начинающих';
// console.log(courseTopic.length);

/* function getShippingCost(country) {
    let message;
    // Пиши код ниже этой строки
    let price;
    switch (country) { // Дополни эту строку
        case 'Китай': // Дополни эту строку
            price = 100; // Дополни эту строку
            break;

        case 'Чили': // Дополни эту строку
            price = 250; // Дополни эту строку
            break;

        case 'Австралия': // Дополни эту строку
            price = 170; // Дополни эту строку
            break;
        case 'Ямайка': // Дополни эту строку
            price = 120; // Дополни эту строку
            break;

        default:
            console.log('Извините, в вашу страну доставки нет');
    }
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    console.log(message);

// Пиши код выше этой строки
return message;
}
getShippingCost('111');

 */ //* #33
/* function formatMessage(message, maxLength) {
    let result;
    // Пиши код ниже этой строки
    result = message.length;
    if (result > maxLength) {
        result = message.slice(0, maxLength) + '...';
    } else { result = message };

    console.log(result);
    // Пиши код выше этой строки

    return result;
}

formatMessage('Curabitur ligula sapien', 12); */

//* #36
/* function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки

    message = message.toLowerCase();
    if (message.includes('spam')) {
        result = true;
    } else if (message.includes('sale')) {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
    // Пиши код выше этой строки
    return result;
}
checkForSpam('Get best sale offers now!'); */
// checkForSpam('Latest technology news');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Get best sale offers now!');


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//     const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//     console.log(message);
//     return message;
// }
// makeOrderMessage(2, 100, 50);

//* ============MODULE-2============== *//
//* #9
/* function getExtremeElements(array) {
    
    const answerArray = [];
    answerArray.push(array[0], array[array.length - 1]);

    console.log(answerArray);
    return answerArray;
    
}

getExtremeElements([1, 2, 3, 4, 5]); */

//* #11

/* function calculateEngravingPrice(message, pricePerWord) {
    // Пиши код ниже этой строки
    let wordsCounter = message.split(' ');
    const totalPrice = wordsCounter.length * pricePerWord;

    console.log(totalPrice);
    return totalPrice
        // Пиши код выше этой строки
}

calculateEngravingPrice('JavaScript у меня в крови', 10); */
function splitMessage(message, delimeter) {
    let words;
    // Пиши код ниже этой строки
    words = message.split(delimeter);
    // words = toString(words);
    console.log(typeof(words));
    console.log(words);


    // Пиши код выше этой строки
    return words;
}
splitMessage('Mango');

/* function makeStringFromArray(array, delimeter) {
    let string;
    // Пиши код ниже этой строки
    console.log(array);
    string = array.join(delimeter);
    console.log(string);

    // Пиши код выше этой строки
    return string;
}

makeStringFromArray(['лучшее', 'за', 'неделю'], '_');
 */

//* #13

/* function slugify(title) {
    // Пиши код ниже этой строки
    const array = title.split(' ');
    const slugString = array.join('-');

    console.log(slugString.toLowerCase());
    return slugString.toLowerCase();
    // Пиши код выше этой строки
}

slugify('Английский для разработчика'); */

//*  #18
const arr = [15, 27, 32, 4];

/* function calculateTotalPrice(order) {
    // Пиши код ниже этой строки

    let sum = 0;
    for (let i = 0; i < order.length; i++)
        sum += order[i];
    console.log(sum);

    // Пиши код выше этой строки
}
calculateTotalPrice(arr); */

//! !!!#21!!! TODO: Разобраться почему [1]

/* function findLongestWord(string) {
    // Пиши код ниже этой строки
    let strArr = string.split(' ');
    let wordLength = 0;
    let longestWord;
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        wordLength = strArr[1].length;
        console.log(wordLength);
        if (strArr[i].length > wordLength) {
            longestWord = strArr[i];

            return longestWord;
        }



    }
    // Пиши код выше этой строки
}

console.log(findLongestWord('Google do a roll')); */

//* #22

/* function createArrayOfNumbers(min, max) {
    let numbers = [];
    // Пиши код ниже этой строки
    for (let i = min; i <= max; i++)
        numbers.push(i);
    // Пиши код выше этой строки
    console.log(numbers);
    return numbers;
}
createArrayOfNumbers(1, 3); */

//* #23