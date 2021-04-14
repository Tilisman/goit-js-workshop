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
//* #33
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
//     // Пиши код ниже этой строки


//     const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//     // Пиши код выше этой строки
//     console.log(message);
//     return message;
// }
// makeOrderMessage(2, 100, 50);

//* ============MODULE-2============== *//

function getExtremeElements(array) {
    // Пиши код ниже этой строки

    array = array[0], array[array.length - 1];
    console.log(array);
    return array;
    // Пиши код выше этой строки
}

getExtremeElements([1, 2, 3, 4, 5]);