import { createSelector } from "reselect";
import DB from "../../../DB/DB";
import { getRegionNumberByPchNumber } from "../../../helpers/common/getRegionNumberByPchNumber/getRegionNumberByPchNumber";
import { getUniquePch } from "../../../helpers/common/getUniquePch/getUniquePch";
import { getPchFullNameByPchNumber } from "../../../helpers/common/getPchFullNameByPchNumber/getPchFullNameByPchNumber";
import { getDirectorateOfInfrastructureShortNameBydirectorateOfInfrastructureNumber } from "../../../helpers/common/getDirectorateOfInfrastructureNameBydirectorateOfInfrastructureNumber/getDirectorateOfInfrastructureNameBydirectorateOfInfrastructureNumber";
import { sheetOtstConst, sheetOcKmConst } from "../../../CONSTS/sheetsHeaderConsts";
import { retreatColumnConstants } from "../../../CONSTS/retreatColumnConstants";
import { createThirdAndFourthDegreesAoA } from "../../../helpers/UI/aoaCreators/thirdAndFourthDegreesAoaCreator/createThirdAndFourthDegreesAoA";
import { calculateMagnitudeN } from "../../../helpers/common/calculateMagnitudeN/calculateMagnitudeN";
import { scoreAoACreator } from "../../../helpers/UI/aoaCreators/scoreAoACreator/scoreAoACreator";
import { getDirectionByCode } from "../../../helpers/common/getDirectionByCode/getDirectionByCode";
import { getStationNameByKmAndDirection } from "../../../helpers/common/getStationNameByKmAndDirection/getStationNameByKmAndDirection";
import { definePicketByMeter } from "../../../helpers/common/definePicketByMeter/definePicketByMeter";
import { defineTypeOfCheckNameByTypeOfChekNumber } from "../../../helpers/common/defineTypeOfCheckNameByTypeOfChekNumber/defineTypeOfCheckNameByTypeOfChekNumber";
import { speedRestrictionsAoACreator } from "../../../helpers/UI/aoaCreators/speedRestrictionsAoACreator/speedRestrictionsAoACreator";
import { selectWorkBook2OtstSheetData } from "../workBook2Data/selectors";
import { selectWorkBook3OtstSheetData } from "../workBook3Data/selectors";
import { shortStraighteningsAoACreator } from "../../../helpers/UI/aoaCreators/shortStraighteningsAoACreator/shortStraighteningsAoACreator";
import { a1543AndMoreAoACreator } from "../../../helpers/UI/aoaCreators/a1543AndMoreAoACreator/a1543AndMoreAoACreator";
import { insulatingJointDrowdownsRepeatsAoACreator } from "../../../helpers/UI/aoaCreators/insulatingJointDrowdownsRepeats/insulatingJointDrowdownsRepeatsAoACreator";
import { repeatabilityAnalysisAoACreator } from "../../../helpers/UI/aoaCreators/repeatabilityAnalysisAoACreator/repeatabilityAnalysisAoACreator";
import { insulatingJointDrowdownsAoACreator } from "../../../helpers/UI/aoaCreators/insulatingJointDrowdowns/insulatingJointDrowdownsAoACreator";

export const selectWorkBookOtstSheetData = (state) => {
    return state.workBookData.otstSheetData;
}

export const selectWorkBookOcKmSheetData = (state) => {
    return state.workBookData.ocKmSheetData;
}

export const selectIsWorkBookDataLoaded = (state) => {
    return state.workBookData.isWorkBookDataLoaded;
}

export const selectIsWorkBookDataLoading = (state) => {
    return state.workBookData.isWorkBookDataLoading;
}

export const selectReportForDay = (state) => {
    return state.workBookData.reportForDay;
}

export const selectReportForMonth = (state) => {
    return state.workBookData.reportForMonth;
}

export const selectReportForYear = (state) => {
    return state.workBookData.reportForYear;
}

export const selectMakeCalculation = (state) => {
    return state.workBookData.makeCalculation;
}





// ---------------------------------------------- Расчитаем данные для отчета "1. 3 и 4 степени.xlsx" ----------------------------------------------
export const selectCalculatedDataThirdAndFourthDegrees = createSelector(
    [selectWorkBookOtstSheetData, selectReportForDay],
    (otstData, reportForDay) => {

        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // третьи и четвертые степени для таблицы 3 и 4 степеней - Массив Объектов такой же по типу как и массив объектов в стейте
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        otstData.forEach(item => {                                          // для каждого объекта (строчки в excel)

            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1) {
                // ------------------------- Третьи и четвертые степени степени. Создадим обеъкт (тип как в стейте) с нужными нам свойствами -------------------------
                if ((item[sheetOtstConst.DEGREE] === 4 || item[sheetOtstConst.DEGREE] === 3) && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                    forAoACreatorAoO.push({
                        "EXCLUDE": item[sheetOtstConst.EXCLUDE],
                        "KM": item[sheetOtstConst.KILOMETER],
                        "PR_PREDUPR": item[sheetOtstConst.PR_PREDUPR],
                        "АМПЛИТУДА": Number.isNaN(item[sheetOtstConst.AMPLITUDE]) ? "-" : item[sheetOtstConst.AMPLITUDE],   // если будет неисправность с амплитудой не числом, не запишем ничего, в противном случае запишем числовую амплитуду
                        "БАЛЛ": item[sheetOtstConst.SCORE],
                        "ВИД": item[sheetOtstConst.TYPE_OF_RETREAT],
                        "ГОД": item[sheetOtstConst.YEAR],
                        "ДЕНЬ": item[sheetOtstConst.DAY],
                        "ДЗ": item[sheetOtstConst.DZ],
                        "ДЛИНА": item[sheetOtstConst.LENGTH_OF_RETREAT],
                        "ИС": item[sheetOtstConst.INSULATING_JOINT],
                        "КЛАСС": item[sheetOtstConst.CLASS],
                        "КОД": item[sheetOtstConst.RAILWAY_CODE],
                        "КОДНАПРВ": item[sheetOtstConst.DIRECTION_CODE],
                        "КОДОТСТУП": item[sheetOtstConst.RETREAT_CODE],
                        "КОЛИЧЕСТВО": item[sheetOtstConst.COUNT],
                        "ЛИНИЯ": item[sheetOtstConst.LINE],
                        "М": item[sheetOtstConst.METER],
                        "МЕСЯЦ": item[sheetOtstConst.MONTH],
                        "МОСТ": item[sheetOtstConst.BRIDGE],
                        "ОБК": item[sheetOtstConst.RUNNING_IN],
                        "ОТСТУПЛЕНИЕ": item[sheetOtstConst.RETREAT_TITLE],
                        "ПС": item[sheetOtstConst.WAGON_NUMBER],
                        "ПУТЬ": item[sheetOtstConst.TRACK],
                        "ПЧ": item[sheetOtstConst.RAILWAY_DISTANCE],
                        "СК_ОГР_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION],           // "-" | number
                        "СК_ОГР_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION],           // "-" | number
                        "СК_УСТ_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_ADVANCED],           // "-" | number
                        "СК_УСТ_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_ADVANCED],           // "-" | number
                        "СТЕПЕНЬ": item[sheetOtstConst.DEGREE],
                        "СТРЕЛКА": item[sheetOtstConst.ARROW]
                    });
                }
                // ------------------------- / Третьи и четвертые степени степени. Создадим обеъкт (тип как в стейте) с нужными нам свойствами -----------------------
            }
        });

        // ---------------- массив массивов для формаирования и аплоада отчетной книги по "1. 3 и 4 степени.xlsx" ------------------------
        forExcelAndPageRenderingData = createThirdAndFourthDegreesAoA(forAoACreatorAoO);
        // ---------------- / массив массивов для формаирования и аплоада отчетной книги по "1. 3 и 4 степени.xlsx" ----------------------

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для отчета "1. 3 и 4 степени.xlsx" --------------------------------------------




// ---------------------------------------------- Расчитаем данные для отчета в Единых формах -> Бальность -----------------------------------------
export const selectCalculatedDataScore = createSelector(
    [selectWorkBookOtstSheetData, selectWorkBookOcKmSheetData, selectReportForDay],
    (otstData, ocKmData, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // Массив с уникальными номерами ПЧ
        const uniquePchArr = getUniquePch(ocKmData, reportForDay);

        // Полное имя ПЧ
        let distanceFullName = "";
        // Километры по видам
        let otlKm = 0, xorKm = 0, UdKm = 0, neUdKm = 0
        // Стеккпени по видам
        let secondDegreesCount = 0, thirdDegreesCount = 0, fourthDegreesWithRstCount = 0, fourthDegreesWithOutRstCount = 0/*, otherRetreats = 0*/;
        // Ограничения скорости по видам
        let speedRestrictionCount0 = 0, speedRestrictionCount15 = 0, speedRestrictionCount25 = 0, speedRestrictionCount40 = 0, speedRestrictionFreightCount60 = 0, speedRestrictionCount60 = 0, speedRestrictionMoreThenCount60 = 0
        // величина Nуч
        let magnitudeN = 0;


        uniquePchArr.forEach(distanceNumber => {

            distanceFullName = getPchFullNameByPchNumber(DB, distanceNumber);     // полное имя текущей дистанции


            ocKmData.forEach(item => {
                if (distanceNumber === item[sheetOcKmConst.RAILWAY_DISTANCE]) {  // если номер текущего уникального ПЧ равен номеру ПЧ в данных из стейта
                    if (item[sheetOcKmConst.GRADE] === 5 && item[sheetOcKmConst.DAY] === +reportForDay) otlKm = +(otlKm + item[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (item[sheetOcKmConst.GRADE] === 4 && item[sheetOcKmConst.DAY] === +reportForDay) xorKm = +(xorKm + item[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (item[sheetOcKmConst.GRADE] === 3 && item[sheetOcKmConst.DAY] === +reportForDay) UdKm = +(UdKm + item[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (item[sheetOcKmConst.GRADE] === 2 && item[sheetOcKmConst.DAY] === +reportForDay) neUdKm = +(neUdKm + item[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                }
            });     // / ocKmData.forEach


            otstData.forEach(item => {
                // ---------------- Общие условия для всех свойств для начала расчета -------------------
                if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                    if (distanceNumber === item[sheetOtstConst.RAILWAY_DISTANCE]) {  // если номер текущего уникального ПЧ равен номеру ПЧ в данных из стейта
                        // ------------- Соберем данные по количеству степеней ---------------------
                        if (item[sheetOtstConst.DEGREE] === 2) {                     // если 2 степень
                            secondDegreesCount = +(secondDegreesCount + item[sheetOtstConst.COUNT])
                        }
                        if (item[sheetOtstConst.DEGREE] === 3) {                     // если 3 степень
                            thirdDegreesCount = +(thirdDegreesCount + item[sheetOtstConst.COUNT])
                        }
                        if (item[sheetOtstConst.DEGREE] === 4 && item[sheetOtstConst.RETREAT_TITLE] !== "Рст") {                     // если 4 степень не Рст
                            fourthDegreesWithOutRstCount = +(fourthDegreesWithOutRstCount + item[sheetOtstConst.COUNT])
                        }
                        if (item[sheetOtstConst.DEGREE] === 4 && item[sheetOtstConst.RETREAT_TITLE] === "Рст") {                     // если 4 степень Рст
                            fourthDegreesWithRstCount = +(fourthDegreesWithRstCount + item[sheetOtstConst.COUNT])
                        }
                        // ------------- / Соберем данные по количеству степеней -------------------


                        // ------------- Соберем данные по количеству ограничений скорости ---------
                        if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === 0 || item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === 0) speedRestrictionCount0 += 1;
                        if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === 15 || item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === 15) speedRestrictionCount15 += 1;
                        if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === 25 || item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === 25) speedRestrictionCount25 += 1;
                        if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === 40 || item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === 40) speedRestrictionCount40 += 1;
                        if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === 60 && item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === "-") speedRestrictionFreightCount60 += 1;
                        if ((item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === 60 && item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === 60) ||
                            (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === "-" && item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === 60)) speedRestrictionCount60 += 1;
                        if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] > 60 || item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] > 60) speedRestrictionMoreThenCount60 += 1;
                        // ------------- / Соберем данные по количеству ограничений скорости -------
                    }
                }
            });     // / otstData.forEach

            // -------------------- Вычислим величину Nуч ----------------------------------
            magnitudeN = calculateMagnitudeN(otlKm, xorKm, UdKm, neUdKm);       // Величина Nуч
            // -------------------- / Вычислим величину Nуч --------------------------------


            // ------------------------- Запушим полученные данные в массив объектов --------------------------
            forAoACreatorAoO.push({
                distanceNumber,
                distanceFullName,
                otlKm,
                xorKm,
                UdKm,
                neUdKm,
                secondDegreesCount,
                thirdDegreesCount,
                fourthDegreesWithOutRstCount,
                fourthDegreesWithRstCount,
                speedRestrictionCount0,
                speedRestrictionCount15,
                speedRestrictionCount25,
                speedRestrictionCount40,
                speedRestrictionFreightCount60,
                speedRestrictionCount60,
                speedRestrictionMoreThenCount60,
                magnitudeN
            });
            // ------------------------- / Запушим полученные данные в массив объектов ------------------------


            // ----------------------- Обнулим все значения для корректного подсчета их для следующего уникального ПЧ -------------------
            // Полное имя ПЧ
            distanceFullName = "";
            // Километры по видам
            otlKm = xorKm = UdKm = neUdKm = 0;
            // Стеккпени по видам
            secondDegreesCount = thirdDegreesCount = fourthDegreesWithRstCount = fourthDegreesWithOutRstCount = /* otherRetreats = */ 0;
            // Ограничения скорости по видам
            speedRestrictionCount0 = speedRestrictionCount15 = speedRestrictionCount25 = speedRestrictionCount40 = speedRestrictionFreightCount60
                = speedRestrictionCount60 = speedRestrictionMoreThenCount60 = 0;
            // величина Nуч
            magnitudeN = 0;
            // ----------------------- / Обнулим все значения для корректного подсчета их для следующего уникального ПЧ -----------------

        });         // / uniquePchArr.forEach

        forExcelAndPageRenderingData = scoreAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;

    }
);
// ---------------------------------------------- / Расчитаем данные для отчета в Единых формах -> Бальность ---------------------------------------



// ---------------------------------------------- Расчитаем данные для отчета в Единых формах -> Справка по ограничениям  -----------------------------------------
export const selectCalculatedDataSpeedRestrictions = createSelector(
    [selectWorkBookOtstSheetData, selectReportForDay],
    (otstData, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // Номер по порядку
        let sequentialNumber = 1;
        // Название Дирекции Инфраструктуры
        let directorateOfInfrastructureShortName = "";
        // Номер ПС
        let vagonNumber;
        // Направление буквами
        let directionName;
        // Станция
        let station;
        // Регион
        let region;
        // номер дистанции пути
        let distanceNumber;
        // Номер пути
        let trackNumber;
        // километр
        let kilometer;
        // Пикет
        let picket;
        // метр
        let meter;
        // Отступлеие
        let retreatTitle;
        // Амплитуда отступления
        let retreatAmplitude;
        // Протяженность отступления
        let retreatLength;
        // Установленная скорость
        let advancedSpeed;
        // Ограниечение скорости
        let restrictionSpeed;
        // Вид проверки
        let typeOfCheck;




        otstData.forEach(item => {
            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] !== "-" || item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] !== "-") {
                    directorateOfInfrastructureShortName = getDirectorateOfInfrastructureShortNameBydirectorateOfInfrastructureNumber(DB, item[sheetOtstConst.RAILWAY_CODE]);
                    vagonNumber = item[sheetOtstConst.WAGON_NUMBER];
                    directionName = getDirectionByCode(DB, item[sheetOtstConst.DIRECTION_CODE]);
                    station = getStationNameByKmAndDirection(DB, item[sheetOtstConst.DIRECTION_CODE], `${item[sheetOtstConst.KILOMETER]}.${item[sheetOtstConst.METER]}`);
                    region = getRegionNumberByPchNumber(DB, item[sheetOtstConst.RAILWAY_DISTANCE]);
                    distanceNumber = item[sheetOtstConst.RAILWAY_DISTANCE];
                    trackNumber = item[sheetOtstConst.TRACK];
                    kilometer = item[sheetOtstConst.KILOMETER];
                    picket = definePicketByMeter(item[sheetOtstConst.METER]);
                    meter = item[sheetOtstConst.METER];
                    retreatTitle = item[sheetOtstConst.RETREAT_TITLE];
                    retreatAmplitude = item[sheetOtstConst.AMPLITUDE];
                    retreatLength = item[sheetOtstConst.LENGTH_OF_RETREAT];
                    advancedSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_ADVANCED]}/${item[sheetOtstConst.FREIGHT_SPEED_ADVANCED]}`;
                    restrictionSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION]}/${item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION]}`;
                    typeOfCheck = defineTypeOfCheckNameByTypeOfChekNumber(item[sheetOtstConst.TYPE_OF_CHECK]);



                    // ------------------------- Запушим полученные данные в массив объектов --------------------------
                    forAoACreatorAoO.push({
                        sequentialNumber,
                        directorateOfInfrastructureShortName,
                        vagonNumber,
                        directionName,
                        station,
                        region,
                        distanceNumber,
                        trackNumber,
                        kilometer,
                        picket,
                        meter,
                        retreatTitle,
                        retreatAmplitude,
                        retreatLength,
                        advancedSpeed,
                        restrictionSpeed,
                        typeOfCheck
                    });
                    // ------------------------- / Запушим полученные данные в массив объектов ------------------------

                    sequentialNumber++;     // Итерируем номер по порядку
                }
            }
        });     // / otstData.forEach

        forExcelAndPageRenderingData = speedRestrictionsAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для отчета в Единых формах -> Справка по ограничениям  ---------------------------------------




// ---------------------------------------------- Расчитаем данные для отчета в Единых формах -> Короткие Рихтовки  -----------------------------------------
export const selectCalculatedDataShortStraightenings = createSelector(
    [selectWorkBookOtstSheetData, selectWorkBook2OtstSheetData, selectReportForDay],
    (otstData, otst2Data, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // Номер по порядку
        let sequentialNumber = 1;
        // Дата проверки
        let fullDate;
        // Номер ПС
        let vagonNumber;
        // Станция
        let station;
        // номер дистанции пути
        let distanceNumber;
        // Номер пути
        let trackNumber;
        // Километр
        let kilometer;
        // Пикет
        let picket;
        // метр
        let meter;
        // Степень рихтовки
        let degree;
        // Величина рихтовки мм/м
        let amount;
        // Изменение величны рихтовки
        let amountChange;
        // Установленная скорость
        let advancedSpeed;
        // Ограниечение скорости
        let restrictionSpeed;



        otstData.forEach(item => {
            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                if (item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.STRAIGHTENING || item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.ARROW_STRAIGHTENING || (item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.NR_STRAIGHTENING && item[sheetOtstConst.DEGREE] === 4)) {
                    // Если рихтовка короткая второй степени
                    if (item[sheetOtstConst.LENGTH_OF_RETREAT] >= 7 && item[sheetOtstConst.LENGTH_OF_RETREAT] <= 15 && item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.PR_PREDUPR] === 0) {
                        // ---------------------- Найдем рихтовки в прошлом проходе +- в 20 метрах --------------------------------
                        let prevStraightenings = otst2Data.filter(otst2DataItem => {
                            return item[sheetOtstConst.DIRECTION_CODE] === otst2DataItem[sheetOtstConst.DIRECTION_CODE]
                                && item[sheetOtstConst.TRACK] === otst2DataItem[sheetOtstConst.TRACK]
                                && otst2DataItem[sheetOtstConst.DEGREE] > 1
                                && item[sheetOtstConst.RETREAT_TITLE] === otst2DataItem[sheetOtstConst.RETREAT_TITLE]
                                && item[sheetOtstConst.KILOMETER] === otst2DataItem[sheetOtstConst.KILOMETER]
                                && (item[sheetOtstConst.METER] - 20) < otst2DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst2DataItem[sheetOtstConst.METER]
                        });

                        if (prevStraightenings.length === 0) {                // Если не нашел в прошлом проезде рихтовки в этой точке
                            amountChange = "вновь";
                        } else if (prevStraightenings.length === 1) {       // Если нашел 1 рихтовку в этой точке
                            const amountChangeFirstObj = prevStraightenings[0];
                            amountChange = item[sheetOtstConst.AMPLITUDE] - amountChangeFirstObj[sheetOtstConst.AMPLITUDE];
                        } else if (prevStraightenings.length > 1) {                                                                     // Если нашел несколько рихтовок
                            prevStraightenings.sort((a, b) => b[sheetOtstConst.METER] - a[sheetOtstConst.METER]);                       // отсортируем массив объектоп по возрастанию
                            const amountChangeFirstSortedObj = prevStraightenings[0];                                                   // первый обхекто в отсортированном массиве
                            amountChange = item[sheetOtstConst.AMPLITUDE] - amountChangeFirstSortedObj[sheetOtstConst.AMPLITUDE]        // изменение рихтовки по сравнению с самой ближней прощлого прохода
                        }
                        // ---------------------- / Найдем рихтовки в прошлом проходе +- в 20 метрах -----------------------------

                        const day = item[sheetOtstConst.DAY] < 10 ? `0${item[sheetOtstConst.DAY]}` : item[sheetOtstConst.DAY];
                        const month = item[sheetOtstConst.MONTH] < 10 ? `0${item[sheetOtstConst.MONTH]}` : item[sheetOtstConst.MONTH];
                        const year = item[sheetOtstConst.YEAR];
                        fullDate = `${day}.${month}.${year}`;
                        vagonNumber = item[sheetOtstConst.WAGON_NUMBER];
                        station = getStationNameByKmAndDirection(DB, item[sheetOtstConst.DIRECTION_CODE], `${item[sheetOtstConst.KILOMETER]}.${item[sheetOtstConst.METER]}`);
                        distanceNumber = item[sheetOtstConst.RAILWAY_DISTANCE];
                        trackNumber = item[sheetOtstConst.TRACK];
                        kilometer = item[sheetOtstConst.KILOMETER];
                        picket = definePicketByMeter(item[sheetOtstConst.METER]);
                        meter = item[sheetOtstConst.METER];
                        degree = item[sheetOtstConst.DEGREE];
                        amount = `${item[sheetOtstConst.AMPLITUDE]}/${item[sheetOtstConst.LENGTH_OF_RETREAT]}`;
                        // amountChange
                        advancedSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_ADVANCED]}/${item[sheetOtstConst.FREIGHT_SPEED_ADVANCED]}`;
                        restrictionSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION]}/${item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION]}`;


                        // ------------------------- Запушим полученные данные в массив объектов --------------------------
                        forAoACreatorAoO.push({
                            sequentialNumber,
                            fullDate,
                            vagonNumber,
                            station,
                            distanceNumber,
                            trackNumber,
                            kilometer,
                            picket,
                            meter,
                            degree,
                            amount,
                            amountChange,
                            advancedSpeed,
                            restrictionSpeed
                        });
                        // ------------------------- / Запушим полученные данные в массив объектов ------------------------

                        sequentialNumber++;     // Итерируем номер по порядку
                    }

                    // Если 2 близкая к 3 степень или выше
                    if (item[sheetOtstConst.DEGREE] > 2 || (item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.PR_PREDUPR] > 0)) {

                        // ---------------------- Найдем рихтовки в прошлом проходе +- в 20 метрах --------------------------------
                        let prevStraightenings = otst2Data.filter(otst2DataItem => {
                            return item[sheetOtstConst.DIRECTION_CODE] === otst2DataItem[sheetOtstConst.DIRECTION_CODE]
                                && item[sheetOtstConst.TRACK] === otst2DataItem[sheetOtstConst.TRACK]
                                && otst2DataItem[sheetOtstConst.DEGREE] > 1
                                && item[sheetOtstConst.RETREAT_TITLE] === otst2DataItem[sheetOtstConst.RETREAT_TITLE]
                                && item[sheetOtstConst.KILOMETER] === otst2DataItem[sheetOtstConst.KILOMETER]
                                && (item[sheetOtstConst.METER] - 20) < otst2DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst2DataItem[sheetOtstConst.METER]
                        });
                        if (prevStraightenings.length === 0) {                // Если не нашел в прошлом проезде рихтовки в этой точке
                            amountChange = "вновь";
                        } else if (prevStraightenings.length === 1) {       // Если нашел 1 рихтовку в этой точке
                            const amountChangeFirstObj = prevStraightenings[0];
                            amountChange = item[sheetOtstConst.AMPLITUDE] - amountChangeFirstObj[sheetOtstConst.AMPLITUDE];
                        } else if (prevStraightenings.length > 1) {                                                                     // Если нашел несколько рихтовок
                            prevStraightenings.sort((a, b) => b[sheetOtstConst.METER] - a[sheetOtstConst.METER]);                       // отсортируем массив объектоп по возрастанию
                            const amountChangeFirstSortedObj = prevStraightenings[0];                                                   // первый обхекто в отсортированном массиве
                            amountChange = item[sheetOtstConst.AMPLITUDE] - amountChangeFirstSortedObj[sheetOtstConst.AMPLITUDE]        // изменение рихтовки по сравнению с самой ближней прощлого прохода
                        }
                        // ---------------------- / Найдем рихтовки в прошлом проходе +- в 20 метрах -----------------------------

                        const day = item[sheetOtstConst.DAY] < 10 ? `0${item[sheetOtstConst.DAY]}` : item[sheetOtstConst.DAY];
                        const month = item[sheetOtstConst.MONTH] < 10 ? `0${item[sheetOtstConst.MONTH]}` : item[sheetOtstConst.MONTH];
                        const year = item[sheetOtstConst.YEAR];
                        fullDate = `${day}.${month}.${year}`;
                        vagonNumber = item[sheetOtstConst.WAGON_NUMBER];
                        station = getStationNameByKmAndDirection(DB, item[sheetOtstConst.DIRECTION_CODE], `${item[sheetOtstConst.KILOMETER]}.${item[sheetOtstConst.METER]}`);
                        distanceNumber = item[sheetOtstConst.RAILWAY_DISTANCE];
                        trackNumber = item[sheetOtstConst.TRACK];
                        kilometer = item[sheetOtstConst.KILOMETER];
                        picket = definePicketByMeter(item[sheetOtstConst.METER]);
                        meter = item[sheetOtstConst.METER];
                        degree = item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.PR_PREDUPR] === 1 ? "2/3" : item[sheetOtstConst.DEGREE];
                        amount = `${item[sheetOtstConst.AMPLITUDE]}/${item[sheetOtstConst.LENGTH_OF_RETREAT]}`;
                        // amountChange
                        advancedSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_ADVANCED]}/${item[sheetOtstConst.FREIGHT_SPEED_ADVANCED]}`;
                        restrictionSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION]}/${item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION]}`;


                        // ------------------------- Запушим полученные данные в массив объектов --------------------------
                        forAoACreatorAoO.push({
                            sequentialNumber,
                            fullDate,
                            vagonNumber,
                            station,
                            distanceNumber,
                            trackNumber,
                            kilometer,
                            picket,
                            meter,
                            degree,
                            amount,
                            amountChange,
                            advancedSpeed,
                            restrictionSpeed
                        });
                        // ------------------------- / Запушим полученные данные в массив объектов ------------------------

                        sequentialNumber++;     // Итерируем номер по порядку
                    }
                }
            }
        });     // / otstData.forEach

        forExcelAndPageRenderingData = shortStraighteningsAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для отчета в Единых формах -> Короткие Рихтовки  ---------------------------------------



// ---------------------------------------------- Расчитаем данные для отчета в Единых формах -> Шаблон 1543 и более  -----------------------------------------
export const selectCalculatedData1543AndMore = createSelector(
    [selectWorkBookOtstSheetData, selectReportForDay],
    (otstData, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // Номер по порядку
        let sequentialNumber = 1;
        // Дата проверки
        let fullDate;
        // номер дистанции пути
        let distanceNumber;
        // Номер пути
        let trackNumber;
        // Направление буквами
        let directionName;
        // километр
        let kilometer;
        // метр
        let meter;
        // Амплитуда отступления
        let retreatAmplitude;
        // Протяженность отступления
        let retreatLength;
        // Количетсво угирений
        let retreatCount;
        // Установленная скорость пассажирским
        let passenengerAdvancedSpeed;
        // Установленная скорость грузовым
        let freightAdvancedSpeed;
        // Норма
        let normal;
        // Ограниечение скорости
        let restrictionSpeed;


        otstData.forEach(item => {
            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                if (item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.WIDE && item[sheetOtstConst.AMPLITUDE] >= 1543) {
                    const day = item[sheetOtstConst.DAY] < 10 ? `0${item[sheetOtstConst.DAY]}` : item[sheetOtstConst.DAY];
                    const month = item[sheetOtstConst.MONTH] < 10 ? `0${item[sheetOtstConst.MONTH]}` : item[sheetOtstConst.MONTH];
                    const year = item[sheetOtstConst.YEAR];
                    fullDate = `${day}.${month}.${year}`;
                    distanceNumber = item[sheetOtstConst.RAILWAY_DISTANCE];
                    trackNumber = item[sheetOtstConst.TRACK];
                    directionName = getDirectionByCode(DB, item[sheetOtstConst.DIRECTION_CODE]);
                    kilometer = item[sheetOtstConst.KILOMETER];
                    meter = item[sheetOtstConst.METER];
                    retreatAmplitude = item[sheetOtstConst.AMPLITUDE];
                    retreatLength = item[sheetOtstConst.LENGTH_OF_RETREAT];
                    retreatCount = item[sheetOtstConst.COUNT];
                    passenengerAdvancedSpeed = item[sheetOtstConst.PASSENGER_SPEED_ADVANCED];
                    freightAdvancedSpeed = item[sheetOtstConst.FREIGHT_SPEED_ADVANCED];
                    normal = item[sheetOtstConst.NORMAL];
                    restrictionSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION]}/${item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION]}`;


                    // ------------------------- Запушим полученные данные в массив объектов --------------------------
                    forAoACreatorAoO.push({
                        sequentialNumber,
                        fullDate,
                        distanceNumber,
                        trackNumber,
                        directionName,
                        kilometer,
                        meter,
                        retreatAmplitude,
                        retreatLength,
                        retreatCount,
                        passenengerAdvancedSpeed,
                        freightAdvancedSpeed,
                        normal,
                        restrictionSpeed
                    });
                    // ------------------------- / Запушим полученные данные в массив объектов ------------------------

                    sequentialNumber++;     // Итерируем номер по порядку
                }
            }
        });     // / otstData.forEach

        forExcelAndPageRenderingData = a1543AndMoreAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для отчета в Единых формах -> Шаблон 1543 и более  ---------------------------------------




// ---------------------------------------------- Расчитаем данные для отчета в Единых формах -> Повторы просадок в ИС  -----------------------------------------
export const selectCalculatedDataInsulatingJointDrowdownsRepeats = createSelector(
    [selectWorkBookOtstSheetData, selectWorkBook2OtstSheetData, selectWorkBook3OtstSheetData, selectReportForDay],
    (otstData, otst2Data, otst3Data, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // Номер по порядку
        let sequentialNumber = 1;
        // Станция
        let station;
        // Регион
        let region;
        // номер дистанции пути
        let distanceNumber;
        // Номер пути
        let trackNumber;
        // Километр
        let kilometer;
        // Пикет
        let picketSlashMeter;
        // Отступлеие
        let retreatTitle;
        // Амплитуда отступления
        let retreatAmplitude;
        // Протяженность отступления
        let retreatLength;
        // Степень
        let degree;
        // Установленная скорость
        let advancedSpeed;
        // Ограниечение скорости
        let restrictionSpeed;
        // Наличие повтора
        let presenceOfRepeat = 0;
        // Вид проверки
        let typeOfCheck;
        // Дата проверки
        let fullDate;



        otstData.forEach(item => {
            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                if ((item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.LEFT_DROWDOWN || item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.RIGHT_DROWDOWN) && item[sheetOtstConst.CONDITIONS_FOR_CALCULATING] < 0) {
                    // ---------------------- Найдем ИС в прошлом и в позапрошлом проходе +- в 20 метрах --------------------------------
                    let prevStraightenings = otst2Data.filter(otst2DataItem => {
                        return item[sheetOtstConst.DIRECTION_CODE] === otst2DataItem[sheetOtstConst.DIRECTION_CODE]
                            && item[sheetOtstConst.TRACK] === otst2DataItem[sheetOtstConst.TRACK]
                            && otst2DataItem[sheetOtstConst.DEGREE] > 1
                            && item[sheetOtstConst.RETREAT_TITLE] === otst2DataItem[sheetOtstConst.RETREAT_TITLE]
                            && item[sheetOtstConst.KILOMETER] === otst2DataItem[sheetOtstConst.KILOMETER]
                            && (item[sheetOtstConst.METER] - 20) < otst2DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst2DataItem[sheetOtstConst.METER]
                    });

                    if (prevStraightenings.length !== 0) {      // Если нашел просадку в этой точке по прошлому периоду
                        presenceOfRepeat = 1;                   // Количество повторов будет 1

                        let prevPrevStraightenings = otst3Data.filter(otst3DataItem => {
                            return item[sheetOtstConst.DIRECTION_CODE] === otst3DataItem[sheetOtstConst.DIRECTION_CODE]
                                && item[sheetOtstConst.TRACK] === otst3DataItem[sheetOtstConst.TRACK]
                                && otst3DataItem[sheetOtstConst.DEGREE] > 1
                                && item[sheetOtstConst.RETREAT_TITLE] === otst3DataItem[sheetOtstConst.RETREAT_TITLE]
                                && item[sheetOtstConst.KILOMETER] === otst3DataItem[sheetOtstConst.KILOMETER]
                                && (item[sheetOtstConst.METER] - 20) < otst3DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst3DataItem[sheetOtstConst.METER]
                        });

                        if (prevPrevStraightenings.length !== 0) {          // Если нашел просадку в этой точке по позапрошлому периоду
                            presenceOfRepeat = 2;                   // Количество повторов будет 2
                        }
                    }
                    // ---------------------- / Найдем ИС в прошлом и в позапрошлом проходе +- в 20 метрах -----------------------------

                    if (presenceOfRepeat !== 0) {                       // если нашли хотябы 1 повтор
                        station = getStationNameByKmAndDirection(DB, item[sheetOtstConst.DIRECTION_CODE], `${item[sheetOtstConst.KILOMETER]}.${item[sheetOtstConst.METER]}`);
                        region = getRegionNumberByPchNumber(DB, item[sheetOtstConst.RAILWAY_DISTANCE]);
                        distanceNumber = item[sheetOtstConst.RAILWAY_DISTANCE];
                        trackNumber = item[sheetOtstConst.TRACK];
                        kilometer = item[sheetOtstConst.KILOMETER];
                        picketSlashMeter = `${definePicketByMeter(item[sheetOtstConst.METER])}/${item[sheetOtstConst.METER]}`;
                        retreatTitle = item[sheetOtstConst.RETREAT_TITLE];
                        retreatAmplitude = item[sheetOtstConst.AMPLITUDE];
                        retreatLength = item[sheetOtstConst.LENGTH_OF_RETREAT];
                        degree = item[sheetOtstConst.DEGREE];
                        advancedSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_ADVANCED]}/${item[sheetOtstConst.FREIGHT_SPEED_ADVANCED]}`;
                        restrictionSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION]}/${item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION]}`;
                        typeOfCheck = defineTypeOfCheckNameByTypeOfChekNumber(item[sheetOtstConst.TYPE_OF_CHECK]);
                        const day = item[sheetOtstConst.DAY] < 10 ? `0${item[sheetOtstConst.DAY]}` : item[sheetOtstConst.DAY];
                        const month = item[sheetOtstConst.MONTH] < 10 ? `0${item[sheetOtstConst.MONTH]}` : item[sheetOtstConst.MONTH];
                        const year = item[sheetOtstConst.YEAR];
                        fullDate = `${day}.${month}.${year}`;


                        // ------------------------- Запушим полученные данные в массив объектов --------------------------
                        forAoACreatorAoO.push({
                            sequentialNumber,
                            station,
                            region,
                            distanceNumber,
                            trackNumber,
                            kilometer,
                            picketSlashMeter,
                            retreatTitle,
                            retreatAmplitude,
                            retreatLength,
                            degree,
                            advancedSpeed,
                            restrictionSpeed,
                            presenceOfRepeat,
                            typeOfCheck,
                            fullDate
                        });
                        // ------------------------- / Запушим полученные данные в массив объектов ------------------------

                        sequentialNumber++;     // Итерируем номер по порядку
                        presenceOfRepeat = 0;   // обнулим счетчик количества повторов
                    }

                }
            }
        });     // / otstData.forEach

        forExcelAndPageRenderingData = insulatingJointDrowdownsRepeatsAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для отчета в Единых формах -> Повторы просадок в ИС  ---------------------------------------




// ---------------------------------------------- Расчитаем данные для отчета Просадки в ИС  форма для ПС  -----------------------------------------
export const selectCalculatedDataInsulatingJointDrowdowns = createSelector(
    [selectWorkBookOtstSheetData, selectWorkBook2OtstSheetData, selectWorkBook3OtstSheetData, selectReportForDay],
    (otstData, otst2Data, otst3Data, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // Номер по порядку
        let sequentialNumber = 1;
        // Номер ПС
        let vagonNumber;
        // Станция
        let station;
        // Регион
        let region;
        // номер дистанции пути
        let distanceNumber;
        // Номер пути
        let trackNumber;
        // Километр
        let kilometer;
        // Пикет
        let picketSlashMeter;
        // Отступлеие
        let retreatTitle;
        // Амплитуда отступления
        let retreatAmplitude;
        // Протяженность отступления
        let retreatLength;
        // Степень
        let degree;
        // Установленная скорость
        let advancedSpeed;
        // Наличие повтора
        let presenceOfRepeat = 0;
        // Вид проверки
        let typeOfCheck;
        // Дата проверки
        let fullDate;


        otstData.forEach(item => {
            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                if ((item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.LEFT_DROWDOWN || item[sheetOtstConst.RETREAT_TITLE] === retreatColumnConstants.RIGHT_DROWDOWN) && item[sheetOtstConst.CONDITIONS_FOR_CALCULATING] < 0) {
                    // ------------------------------------ Запишем найденную просадку в ИС ---------------------------------------------
                    vagonNumber = item[sheetOtstConst.WAGON_NUMBER];
                    station = getStationNameByKmAndDirection(DB, item[sheetOtstConst.DIRECTION_CODE], `${item[sheetOtstConst.KILOMETER]}.${item[sheetOtstConst.METER]}`);
                    region = getRegionNumberByPchNumber(DB, item[sheetOtstConst.RAILWAY_DISTANCE]);
                    distanceNumber = item[sheetOtstConst.RAILWAY_DISTANCE];
                    trackNumber = item[sheetOtstConst.TRACK];
                    kilometer = item[sheetOtstConst.KILOMETER];
                    picketSlashMeter = `${definePicketByMeter(item[sheetOtstConst.METER])}/${item[sheetOtstConst.METER]}`;
                    retreatTitle = item[sheetOtstConst.RETREAT_TITLE];
                    retreatAmplitude = item[sheetOtstConst.AMPLITUDE];
                    retreatLength = item[sheetOtstConst.LENGTH_OF_RETREAT];
                    degree = item[sheetOtstConst.DEGREE];
                    advancedSpeed = `${item[sheetOtstConst.PASSENGER_SPEED_ADVANCED]}/${item[sheetOtstConst.FREIGHT_SPEED_ADVANCED]}`;
                    typeOfCheck = defineTypeOfCheckNameByTypeOfChekNumber(item[sheetOtstConst.TYPE_OF_CHECK]);
                    const day = item[sheetOtstConst.DAY] < 10 ? `0${item[sheetOtstConst.DAY]}` : item[sheetOtstConst.DAY];
                    const month = item[sheetOtstConst.MONTH] < 10 ? `0${item[sheetOtstConst.MONTH]}` : item[sheetOtstConst.MONTH];
                    const year = item[sheetOtstConst.YEAR];
                    fullDate = `${day}.${month}.${year}`;
                    // ------------------------------------ / Запишем найденную просадку в ИС -------------------------------------------


                    // ---------------------- Найдем ИС в прошлом и в позапрошлом проходе +- в 20 метрах --------------------------------
                    let prevStraightenings = otst2Data.filter(otst2DataItem => {
                        return item[sheetOtstConst.DIRECTION_CODE] === otst2DataItem[sheetOtstConst.DIRECTION_CODE]
                            && item[sheetOtstConst.TRACK] === otst2DataItem[sheetOtstConst.TRACK]
                            && otst2DataItem[sheetOtstConst.DEGREE] > 1
                            && item[sheetOtstConst.RETREAT_TITLE] === otst2DataItem[sheetOtstConst.RETREAT_TITLE]
                            && item[sheetOtstConst.KILOMETER] === otst2DataItem[sheetOtstConst.KILOMETER]
                            && (item[sheetOtstConst.METER] - 20) < otst2DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst2DataItem[sheetOtstConst.METER]
                    });

                    if (prevStraightenings.length !== 0) {      // Если нашел просадку в этой точке по прошлому периоду
                        presenceOfRepeat = 1;                   // Количество повторов будет 1

                        let prevPrevStraightenings = otst3Data.filter(otst3DataItem => {
                            return item[sheetOtstConst.DIRECTION_CODE] === otst3DataItem[sheetOtstConst.DIRECTION_CODE]
                                && item[sheetOtstConst.TRACK] === otst3DataItem[sheetOtstConst.TRACK]
                                && otst3DataItem[sheetOtstConst.DEGREE] > 1
                                && item[sheetOtstConst.RETREAT_TITLE] === otst3DataItem[sheetOtstConst.RETREAT_TITLE]
                                && item[sheetOtstConst.KILOMETER] === otst3DataItem[sheetOtstConst.KILOMETER]
                                && (item[sheetOtstConst.METER] - 20) < otst3DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst3DataItem[sheetOtstConst.METER]
                        });

                        if (prevPrevStraightenings !== 0) {          // Если нашел просадку в этой точке по позапрошлому периоду
                            presenceOfRepeat = 2;                   // Количество повторов будет 2
                        }
                    }
                    // ---------------------- / Найдем ИС в прошлом и в позапрошлом проходе +- в 20 метрах -----------------------------

                    // если нашли хоть один повтор просадки, в противном случае будет пустая ячейка
                    presenceOfRepeat = presenceOfRepeat === 0 ? null : presenceOfRepeat;

                    // ------------------------- Запушим полученные данные в массив объектов --------------------------
                    forAoACreatorAoO.push({
                        sequentialNumber,
                        vagonNumber,
                        station,
                        region,
                        distanceNumber,
                        trackNumber,
                        kilometer,
                        picketSlashMeter,
                        retreatTitle,
                        retreatAmplitude,
                        retreatLength,
                        degree,
                        advancedSpeed,
                        presenceOfRepeat,
                        typeOfCheck,
                        fullDate
                    });
                    // ------------------------- / Запушим полученные данные в массив объектов ------------------------

                    sequentialNumber++;     // Итерируем номер по порядку
                    presenceOfRepeat = 0;   // обнулим счетчик количества повторов
                }
            }
        });     // / otstData.forEach

        forExcelAndPageRenderingData = insulatingJointDrowdownsAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для отчета Просадки в ИС  форма для ПС  ---------------------------------------




// ---------------------------------------------- Расчитаем данные для отчета в Единых формах -> Анализ повторяемости  -----------------------------------------
export const selectCalculatedDataRepeatabilityAnalysis = createSelector(
    [selectWorkBookOtstSheetData, selectWorkBook2OtstSheetData, selectWorkBook3OtstSheetData, selectReportForDay],
    (otstData, otst2Data, otst3Data, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // Дата проверки
        let fullDate;
        // Номер ПС
        let vagonNumber;
        // номер дистанции пути
        let distanceNumber;
        // Станция
        let station;
        // Номер пути
        let trackNumber;
        // Километр
        let kilometer;
        // Пикет/метр
        let picketSlashMeter;
        // Отступлеие
        let retreatTitle;
        // Степень неисправности по текущему периоду
        let currentPeriodDegree;
        // Амплитуда отступления по текущему периоду
        let currentPeriodRetreatAmplitude;
        // Протяженность отступления по текущему периоду
        let currentPeriodRetreatLength;
        // Степень неисправности по предыдущему периоду
        let prevPeriodRetreatDegree;
        // Амплитуда отступления по предыдущему периоду
        let prevPeriodRetreatAmplitude;
        // Протяженность отступления по предыдущему периоду
        let prevPeriodRetreatLength;
        // Степень неисправности по позапрошлому периоду
        let prevPrevPeriodRetreatDegree;
        // Амплитуда отступления по позапрошлому периоду
        let prevPrevPeriodRetreatAmplitude;
        // Протяженность отступления по позапрошлому периоду
        let prevPrevPeriodRetreatLength;




        otstData.forEach(item => {
            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                if (item[sheetOtstConst.DEGREE] === 3) {            // найдем сначала тройки
                    const day = item[sheetOtstConst.DAY] < 10 ? `0${item[sheetOtstConst.DAY]}` : item[sheetOtstConst.DAY];
                    const month = item[sheetOtstConst.MONTH] < 10 ? `0${item[sheetOtstConst.MONTH]}` : item[sheetOtstConst.MONTH];
                    const year = item[sheetOtstConst.YEAR];
                    fullDate = `${day}.${month}.${year}`;
                    vagonNumber = item[sheetOtstConst.WAGON_NUMBER];
                    distanceNumber = item[sheetOtstConst.RAILWAY_DISTANCE];
                    station = getStationNameByKmAndDirection(DB, item[sheetOtstConst.DIRECTION_CODE], `${item[sheetOtstConst.KILOMETER]}.${item[sheetOtstConst.METER]}`);
                    trackNumber = item[sheetOtstConst.TRACK];
                    kilometer = item[sheetOtstConst.KILOMETER];
                    picketSlashMeter = `${definePicketByMeter(item[sheetOtstConst.METER])}/${item[sheetOtstConst.METER]}`;
                    retreatTitle = item[sheetOtstConst.RETREAT_TITLE];
                    currentPeriodDegree = item[sheetOtstConst.DEGREE];
                    currentPeriodRetreatAmplitude = item[sheetOtstConst.AMPLITUDE];
                    currentPeriodRetreatLength = item[sheetOtstConst.LENGTH_OF_RETREAT];

                    // ---------------------- Найдем это отступление в прошлом и в позапрошлом проходе +- в 20 метрах --------------------------------
                    let prevPeriodRetreat = otst2Data.filter(otst2DataItem => {
                        return item[sheetOtstConst.DIRECTION_CODE] === otst2DataItem[sheetOtstConst.DIRECTION_CODE]
                            && item[sheetOtstConst.TRACK] === otst2DataItem[sheetOtstConst.TRACK]
                            && otst2DataItem[sheetOtstConst.DEGREE] > 1
                            && item[sheetOtstConst.RETREAT_TITLE] === otst2DataItem[sheetOtstConst.RETREAT_TITLE]
                            && item[sheetOtstConst.KILOMETER] === otst2DataItem[sheetOtstConst.KILOMETER]
                            && (item[sheetOtstConst.METER] - 20) < otst2DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst2DataItem[sheetOtstConst.METER]
                    });

                    let prevPrevPeriodRetreat = otst3Data.filter(otst3DataItem => {
                        return item[sheetOtstConst.DIRECTION_CODE] === otst3DataItem[sheetOtstConst.DIRECTION_CODE]
                            && item[sheetOtstConst.TRACK] === otst3DataItem[sheetOtstConst.TRACK]
                            && otst3DataItem[sheetOtstConst.DEGREE] > 1
                            && item[sheetOtstConst.RETREAT_TITLE] === otst3DataItem[sheetOtstConst.RETREAT_TITLE]
                            && item[sheetOtstConst.KILOMETER] === otst3DataItem[sheetOtstConst.KILOMETER]
                            && (item[sheetOtstConst.METER] - 20) < otst3DataItem[sheetOtstConst.METER] && (item[sheetOtstConst.METER] + 20) > otst3DataItem[sheetOtstConst.METER]
                    });

                    if (prevPeriodRetreat.length === 0) {                // Если не нашел в прошлом проезде отступление в этой точке
                        prevPeriodRetreatDegree = "";
                        prevPeriodRetreatAmplitude = "";
                        prevPeriodRetreatLength = "";
                    } else if (prevPeriodRetreat.length === 1) {       // Если нашел 1 неисправность в этой точке
                        const prevPeriodRetreatFirstSortedObj = prevPeriodRetreat[0];
                        prevPeriodRetreatDegree = prevPeriodRetreatFirstSortedObj[sheetOtstConst.DEGREE];
                        prevPeriodRetreatAmplitude = prevPeriodRetreatFirstSortedObj[sheetOtstConst.AMPLITUDE];
                        prevPeriodRetreatLength = prevPeriodRetreatFirstSortedObj[sheetOtstConst.LENGTH_OF_RETREAT];
                    } else if (prevPeriodRetreat.length > 1) {                                                                       // Если нашел несколько неисправностей
                        prevPeriodRetreat.sort((a, b) => b[sheetOtstConst.METER] - a[sheetOtstConst.METER]);                       // отсортируем массив объектоп по возрастанию
                        const prevPeriodRetreatFirstSortedObj = prevPeriodRetreat[0];                                                   // первый объект в отсортированном массиве, то есть самый ближний к обнаруженной неисправности в текущем периоде
                        prevPeriodRetreatDegree = prevPeriodRetreatFirstSortedObj[sheetOtstConst.DEGREE];
                        prevPeriodRetreatAmplitude = prevPeriodRetreatFirstSortedObj[sheetOtstConst.AMPLITUDE];
                        prevPeriodRetreatLength = prevPeriodRetreatFirstSortedObj[sheetOtstConst.LENGTH_OF_RETREAT];
                    }

                    if (prevPrevPeriodRetreat.length === 0) {                // Если не нашел в позапрошлом проезде отступление в этой точке
                        prevPrevPeriodRetreatDegree = "";
                        prevPrevPeriodRetreatAmplitude = "";
                        prevPrevPeriodRetreatLength = "";
                    } else if (prevPrevPeriodRetreat.length === 1) {       // Если нашел 1 неисправность в этой точке
                        const prevPeriodRetreatFirstSortedObj = prevPrevPeriodRetreat[0];
                        prevPrevPeriodRetreatDegree = prevPeriodRetreatFirstSortedObj[sheetOtstConst.DEGREE];
                        prevPrevPeriodRetreatAmplitude = prevPeriodRetreatFirstSortedObj[sheetOtstConst.AMPLITUDE];
                        prevPrevPeriodRetreatLength = prevPeriodRetreatFirstSortedObj[sheetOtstConst.LENGTH_OF_RETREAT];
                    } else if (prevPrevPeriodRetreat.length > 1) {                                                                       // Если нашел несколько неисправностей
                        prevPrevPeriodRetreat.sort((a, b) => b[sheetOtstConst.METER] - a[sheetOtstConst.METER]);                       // отсортируем массив объектоп по возрастанию
                        const prevPrevPeriodRetreatFirstSortedObj = prevPrevPeriodRetreat[0];                                                   // первый объект в отсортированном массиве, то есть самый ближний к обнаруженной неисправности в текущем периоде
                        prevPrevPeriodRetreatDegree = prevPrevPeriodRetreatFirstSortedObj[sheetOtstConst.DEGREE];
                        prevPrevPeriodRetreatAmplitude = prevPrevPeriodRetreatFirstSortedObj[sheetOtstConst.AMPLITUDE];
                        prevPrevPeriodRetreatLength = prevPrevPeriodRetreatFirstSortedObj[sheetOtstConst.LENGTH_OF_RETREAT];
                    }

                    // ------------------------- Запушим полученные данные в массив объектов --------------------------
                    forAoACreatorAoO.push({
                        fullDate,
                        vagonNumber,
                        distanceNumber,
                        station,
                        trackNumber,
                        kilometer,
                        picketSlashMeter,
                        retreatTitle,
                        currentPeriodDegree,
                        currentPeriodRetreatAmplitude,
                        currentPeriodRetreatLength,
                        prevPeriodRetreatDegree,
                        prevPeriodRetreatAmplitude,
                        prevPeriodRetreatLength,
                        prevPrevPeriodRetreatDegree,
                        prevPrevPeriodRetreatAmplitude,
                        prevPrevPeriodRetreatLength
                    });
                    // ---------------------- / Найдем это отступление в прошлом и в позапрошлом проходе +- в 20 метрах -----------------------------
                }
            }
        });     // / otstData.forEach

        forExcelAndPageRenderingData = repeatabilityAnalysisAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для отчета в Единых формах -> Анализ повторяемости  ---------------------------------------