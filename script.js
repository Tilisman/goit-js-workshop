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

//! ============MODULE-2============== *//
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
/* function splitMessage(message, delimeter) {
    let words;
    // Пиши код ниже этой строки
    words = message.split(delimeter);
    // words = toString(words);
    console.log(typeof(words));
    console.log(words);


    // Пиши код выше этой строки
    return words;
}
splitMessage('Mango'); */

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
/*const arr = [15, 27, 32, 4];

 function calculateTotalPrice(order) {
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
    console.table(strArr);
    for (let i = 0; i < strArr.length; i++) {
        wordLength = strArr[1].length;
        // console.log(wordLength);
        if (strArr[i].length > wordLength) {
            longestWord = strArr[i];

            return longestWord;
        }



    }
    // Пиши код выше этой строки
}

console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
 */
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

/* function filterArray(numbers, value) {
    // Пиши код ниже этой строки
    let arrayChecked = [];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > value) {
            arrayChecked.push(numbers[i]);
        }
    }
    console.log(numbers);
    console.log(arrayChecked);
    return arrayChecked;
    // Пиши код выше этой строки
}

filterArray([12, 24, 8, 41, 76], 20); */

//* 25

/* function getCommonElements(array1, array2) {
    // Пиши код ниже этой строки
    let array3 = [];
    for (let index = 0; index < array1.length; index++) {
        console.log(array2.includes(array1[index]));
        if (array2.includes(array1[index])) {
            array3.push(array1[index])
        }
    }




    // Пиши код выше этой строки
}

getCommonElements([1, 3, 5], [0, 8, 5, 3]) */

//* 26

/* function calculateTotalPrice(order) {
    let total = 0;
    // Пиши код ниже этой строки

    for (const ordered of order) {
        total += ordered;
    }
    console.log(total);
    // Пиши код выше этой строки
    return total;
}

calculateTotalPrice([12, 85, 37, 4]); */
// ===============================================
// const planets = ['Земля', 'Марс', 'Венера'];

// for (const planet of planets) {
//     console.log(planet);
// }
// ===============================================

/* console.log(3 % 1);
console.log(4 % 3);
console.log(11 % 4);
console.log(12 % 7);
console.log(8 % 3); */

//* #29

/* function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    let array = [];
    for (let i = start; i <= end; i++) {
        console.log(i);
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    console.log(array);
    return array;


    // Пиши код выше этой строки
}

getEvenNumbers(2, 4); */

//* #32
/* 
function includes(array, value) {
    // Пиши код ниже этой строки

    let result = false;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] === value) {
            result = true;
            break;
        }
    }

    console.log(result);
    return result;
    // Пиши код выше этой строки
}
includes([1, 2, 3, 4, 5], 3); */




//! ============MODULE-3============== !//
//* #7

/* const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
        name: 'Генри Сибола',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com'
    }
};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Ямайка';
apartment.location.city = 'Ямайка';





console.log(apartment); */

//* #10/11

/* const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
for (const key in apartment) {
    if (apartment.hasOwnProperty(key)) {
        keys.push(key);
        values.push(apartment[key]);
    }
}
console.table(keys);
console.table(values);
console.log(apartment); */

//* #12

/* function countProps(object) {
    let propCount = 0;
    // Пиши код ниже этой строки
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            propCount++;
        }
    }
    // Пиши код выше этой строки
    console.log(propCount);
    return propCount;
}


countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); */

//* #13

/* const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for(const key of keys){
values.push(apartment[key]);
} */

//* #14

/* function countProps(object) {
    // Пиши код ниже этой строки
    let propCount = 0;

    const keys = Object.keys(object)
    propCount = keys.length;

    return propCount;

}

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); */

//* #16

/* function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
    const values = Object.values(salaries);
    for (const value of values) {
        totalSalary += value;
    }
    // Пиши код выше этой строки
    console.log(totalSalary);
    return totalSalary;
}

countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); */


//* #17

/* const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}

console.table(hexColors);
console.table(rgbColors); */

//* #18

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    // Пиши код ниже этой строки
    let productPrice = null;
    let values = Object.values(products)
    for (const value of values) {
        console.log(value);
        if (value.name === productName) {
            productPrice = value.price;
        }

    }
    console.log(`${productName} price: ${productPrice}`);
    return productPrice;
    // Пиши код выше этой строки
}
getProductPrice('Радар');
getProductPrice('Сканер');
getProductPrice('Дроид');
getProductPrice('Захват');