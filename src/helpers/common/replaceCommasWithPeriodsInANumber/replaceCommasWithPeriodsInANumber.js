/*
    функция принимает число, ищет в нем запятые, если они есть, меняет их на точки и возвращает число с точками вместо запятых
*/

export const replaceCommasWithPeriodsInANumber = (numberWithCommas) => {
    numberWithCommas = String(numberWithCommas);
    const returnedStr = numberWithCommas.replace(/,/g, ".");
    return returnedStr;
}