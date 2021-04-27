import { createSelector } from "reselect";
import { selectWagonFullName, selectInspectionArea } from "../wagonInfo/selectors";
import { selectWorkBookOcKmSheetData, selectReportForDay } from "../workBookData/selectors";
import { getUniqueNumbersFromArr } from "../../../helpers/common/getUniqueNumbersFromArr/getUniqueNumbersFromArr";
import { getPchNumberByCodeAndKm } from "../../../helpers/common/getPchNumberByCodeAndKm/getPchNumberByCodeAndKm";
import { getRegionNumberByPchNumber } from "../../../helpers/common/getRegionNumberByPchNumber/getRegionNumberByPchNumber";
import { sheetVideoConst, sheetOcKmConst } from "../../../CONSTS/sheetsHeaderConsts";
import { getDirectionByCode } from "../../../helpers/common/getDirectionByCode/getDirectionByCode";
import { getPchFullNameByPchNumber } from "../../../helpers/common/getPchFullNameByPchNumber/getPchFullNameByPchNumber"
import DB from "../../../DB/DB";
import { retreatVideoCodes } from "../../../DB/retreatVideoCodes";



export const selectVideoBookData = (state) => {
    return state.videoBookData.videoSheetData;
}

export const selectIsVideoBookDataLoaded = (state) => {
    return state.videoBookData.isVideoBookDataLoaded;
}


// ---------------------------------------------- Расчитаем данные для телеграммы по видео  -----------------------------------------
export const selectCalculatedDataTelegramVideo = createSelector(
    [selectVideoBookData, selectWorkBookOcKmSheetData, selectWagonFullName, selectInspectionArea, selectReportForDay],
    (videoData, ocKmData, wagonFullName, inspectionArea, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив объектов - для формаирования AoA в AoACreator`е
        let forAoACreatorAoO = [];

        // Массив массивов - для формаирования книги excel и рендеринга страницы в браузере
        let forExcelAndPageRenderingData = [];

        // ------------------------------------ Первая строка телеграммы ----------------------------------------
        // -------------- Уникальные ПЧ --------------
        const allPchArr = videoData.map(item => {                                                    // массив с номерами всех ПЧ вычисления уникальных ПЧ
            const kilometerMeterDouble = `${item[sheetVideoConst.KILOMETER]}.${item[sheetVideoConst.METER]}`        // километр и метр десятичная дробь. Для функции getPchNumberByCodeAndKm
            const distanceNumber = getPchNumberByCodeAndKm(item[sheetVideoConst.DIRECTION_CODE], kilometerMeterDouble)
            return distanceNumber;
        });
        const uniquePchNumbersArr = getUniqueNumbersFromArr(allPchArr);                // массив уникальных номеров ПЧ (цифры)
        let uniquePchPartAndNumbersArr;
        if (uniquePchNumbersArr[0] === "") {                                            // если не загрузили файл с видео при первом рендеринге страницы, чтобы не было ошибки приложения, так как map не может быть на ""
            uniquePchPartAndNumbersArr = [];
        } else {
            uniquePchPartAndNumbersArr = uniquePchNumbersArr.map(item => DB.distances.find(element => {       // массив из принадлежности и номера ПЧ (например: ПЧ-15)
                return element.distanceNumber === item;
            }).distancePartAndNumber);
        }
        const uniquePchPartAndNumbersStr = uniquePchPartAndNumbersArr.join(", ");                           // строка вида "ПЧ-3, ПЧ-33" для адресов в телеграмме
        // -------------- / Уникальные ПЧ ------------

        // -------------- Уникальные Регионы --------------
        const RegionsArr = uniquePchNumbersArr.map(distanceNumber => getRegionNumberByPchNumber(DB, distanceNumber));       // массив с номерами регионов по каждой неисправности
        const uniqueRegionsArr = getUniqueNumbersFromArr(RegionsArr);                   // массив из уникальных направлений
        const uniqueRegionsStr = uniqueRegionsArr.join(", ");                           // // строка состоящая из номеров регионов вида "1, 3" для адресов в телеграмме

        const firstTelegramRow = [`${uniquePchPartAndNumbersStr}; Копия: НЗ-РБ, зам РБ-рег-${uniqueRegionsStr}, РЦДМ, ДИЦУСИ.`];
        // -------------- / Уникальные Регионы ------------
        // ------------------------------------ / Первая строка телеграммы --------------------------------------


        // ------------------------------------ Вторая строка телеграммы ----------------------------------------
        // ---------- Дата проверки ------------
        const currentDateFirstObj = videoData[0];
        const currentDate = currentDateFirstObj[sheetVideoConst.DATE];
        // ---------- / Дата проверки ----------

        // -------- Количесство проверенных километров --------
        const totalCheckedKilometers = ocKmData.reduce((prevVal, item) => {
            if (item[sheetOcKmConst.DAY] === +reportForDay) {
                let sum = Number(prevVal) + Number(item[sheetOcKmConst.CHECKED_KILOMETERS]);
                sum = sum.toFixed(3);
                return sum;
            } else {
                return +prevVal;
            }
        }, 0);
        // -------- / Количесство проверенных километров ------

        const secondTelegramRow = [`${currentDate} г. вагоном ${wagonFullName} проверено состояние пути на участке: ${inspectionArea} проверено ${totalCheckedKilometers} км главных путей.`]
        // ------------------------------------ / Вторая строка телеграммы --------------------------------------


        // ------------------------------------------------- Третья строка телеграммы ------------------------------------------------------
        // ------- Количество выявленных отступлений по видео без нулей в графе величина, чтобы они не попали в телеграмму --------
        const videoRetreatsWithoutNull = videoData.reduce((prevVal, item) => {
            if (item[sheetVideoConst.RETREAT_AMOUNT] !== 0) {
                return +prevVal + 1
            } else {
                return +prevVal
            }
        }, 0);
        // ------- Количество выявленных отступлений по видео без нулей в графе величина, чтобы они не попали в телеграмму --------

        const thirdTelegramRow = [`По результатам расшифровки видеозаписи вагона ${wagonFullName} выявлено ${videoRetreatsWithoutNull} замечаний по содержанию ВСП.`];
        // ------------------------------------------------- / Третья строка телеграммы ----------------------------------------------------


        // ------------------- массивы для отрисовки в эксель и на странице -----------------------
        let forXLSXAoA = [firstTelegramRow, secondTelegramRow, thirdTelegramRow];
        let forBrowserPageRenderObj = [firstTelegramRow, secondTelegramRow, thirdTelegramRow];
        // ------------------- / массивы для отрисовки в эксель и на странице ---------------------


        // ------------------------------------------------- Четвертая строка телеграммы ------------------------------------------------------
        let directionCode = 0;
        let track = 0;
        let distanceNumberFromMemory = 0;       // последний сохранненый номер дистанции пути
        
        videoData.forEach(item => {
            const kilometerMeterDouble = `${item[sheetVideoConst.KILOMETER]}.${item[sheetVideoConst.METER]}`;        // километр и метр десятичная дробь. Для функции getPchNumberByCodeAndKm
            const distanceNumber = getPchNumberByCodeAndKm(item[sheetVideoConst.DIRECTION_CODE], kilometerMeterDouble); // номер дистанции пути вычисленный на основе данных из запоненной пользователем таблицы     
            const distanceFullName = getPchFullNameByPchNumber(DB, +distanceNumber);
            
            // если сменится направление или номер пч или путь, запушим это для отображения в телеграмме новой строки со сменненным направлением или пч или путем
            if (directionCode !== item[sheetVideoConst.DIRECTION_CODE] || track != item[sheetVideoConst.TRACK] || distanceNumberFromMemory !== distanceNumber) {                // если направление или путь или ПЧ меняется пушим новое направление в массив
                directionCode = item[sheetVideoConst.DIRECTION_CODE];
                track = item[sheetVideoConst.TRACK];
                distanceNumberFromMemory = distanceNumber;
                
                forXLSXAoA.push([""]);                                         // запушим также разрыв строки
                forXLSXAoA.push([`${distanceFullName}, направление: ${getDirectionByCode(DB, directionCode)}, ${track} путь:`]);
            }

            const retreatTitleObj = retreatVideoCodes.find(element => element.retreatCode === item[sheetVideoConst.RETREAT_CODE]);
            const retreatAmaunt = item[sheetVideoConst.RETREAT_AMOUNT] ? item[sheetVideoConst.RETREAT_AMOUNT] : "";

            if (item[sheetVideoConst.RETREAT_CODE] === 3 || item[sheetVideoConst.RETREAT_CODE] === 4 || item[sheetVideoConst.RETREAT_CODE] === 7) {     // если это зазор или подвижка
                if (item[sheetVideoConst.RETREAT_AMOUNT] !== 0) {                                                                                       // если они не нулевые
                    forXLSXAoA.push([`
                        ${item[sheetVideoConst.KILOMETER]} км ${item[sheetVideoConst.METER]} м, ${item[sheetVideoConst.RAIL_THREAD]}, 
                        ${retreatTitleObj.retreatFullTitle} ${retreatAmaunt} мм.
                    `]);
                }
            } else {                                                                                                                                    // если это не зазор и не подвижка запушим в любом случае
                forXLSXAoA.push([`
                    ${item[sheetVideoConst.KILOMETER]} км ${item[sheetVideoConst.METER]} м, ${item[sheetVideoConst.RAIL_THREAD]}, 
                    ${retreatTitleObj.retreatFullTitle}${retreatAmaunt ? retreatAmaunt + " мм." : "."}
                `]);
            }
        });

        forBrowserPageRenderObj = [...forXLSXAoA];
        

        // ------------------------------------------------- / Четвертая строка телеграммы ----------------------------------------------------





        
        debugger



        // forExcelAndPageRenderingData = speedRestrictionsAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        // returnedDataObject.AoO = forAoACreatorAoO;
        returnedDataObject.forXLSXAoA = forXLSXAoA
        returnedDataObject.forBrowserPageRenderObj = forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для телеграммы по видео  ---------------------------------------