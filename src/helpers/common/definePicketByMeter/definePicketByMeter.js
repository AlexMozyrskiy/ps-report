/* Функция принимает метр и определяет на каком он пикете */

export function definePicketByMeter(meter) {
    let pk;                                     // пикет, будем возвращать из функции

    if (!Number.isFinite(meter)) {                     // если передано не число
        meter = +meter;                         // приведем его к числу
    }

    if (Number.isNaN(meter)) {                         // если передано (или после первого приведения к числу) NaN
        alert("в функцию определяющую пикет по метру передано не число");   // сообщение об ошибке
    }

    const meterStr = String(meter);

    if(meterStr.length === 1 || meterStr.length === 2) {            // если количество цифр в метре 1 или 2, то пикет будет 1
        pk = 1;
    } else if (meterStr.length === 3) {                             // если количество цифр в метре равно три, например 321
        let meterFirstNumber = meterStr.substr(0, 1);               // получим первую цифру
        meterFirstNumber = Number(meterFirstNumber);                // приведем ее к числу
        pk = meterFirstNumber + 1;                                  // прибавим 1 чтобы получит пикет
    } else if(meterStr.length > 3) {                                // если количество цифр в метре более трех, например 1022        
        let meterFirstNumber = meterStr.substr(0, 2);               // получим первые 2 цифры
        meterFirstNumber = Number(meterFirstNumber);                // приведем их к числу
        pk = meterFirstNumber + 1;                                  // прибавим 1 чтобы получит пикет
    }

    return pk;
}