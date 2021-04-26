import { createSelector } from "reselect";
import { getUniqueNumbersFromArr } from "../../../helpers/common/getUniqueNumbersFromArr/getUniqueNumbersFromArr";
import { getPchNumberByCodeAndKm } from "../../../helpers/common/getPchNumberByCodeAndKm/getPchNumberByCodeAndKm";
import { getRegionNumberByPchNumber } from "../../../helpers/common/getRegionNumberByPchNumber/getRegionNumberByPchNumber";
import { sheetVideoConst } from "../../../CONSTS/sheetsHeaderConsts";
import DB from "../../../DB/DB";



export const selectVideoBookData = (state) => {
    return state.videoBookData.videoSheetData;
}

export const selectIsVideoBookDataLoaded = (state) => {
    return state.videoBookData.isVideoBookDataLoaded;
}


// ---------------------------------------------- Расчитаем данные для телеграммы по видео  -----------------------------------------
export const selectCalculatedDataTelegramVideo = createSelector(
    [selectVideoBookData],
    (videoData) => {
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
        const uniquePchPartAndNumbersArr = uniquePchNumbersArr.map(item => DB.distances.find(element => {       // массив из принадлежности и номера ПЧ (например: ПЧ-15)
            return element.distanceNumber === item;
        }).distancePartAndNumber);
        const uniquePchPartAndNumbersStr = uniquePchPartAndNumbersArr.join(", ");                           // строка вида "ПЧ-3, ПЧ-33" для адресов в телеграмме
        // -------------- / Уникальные ПЧ ------------

        // -------------- Уникальные Регионы --------------
        const RegionsArr = uniquePchNumbersArr.map(distanceNumber => getRegionNumberByPchNumber(DB, distanceNumber));       // массив с номерами регионов по каждой неисправности
        const uniqueRegionsArr = getUniqueNumbersFromArr(RegionsArr);                   // массив из уникальных направлений
        const uniqueRegionsStr = uniqueRegionsArr.join(", ");                           // // строка состоящая из номеров регионов вида "1, 3" для адресов в телеграмме

        const firstTelegramRow = [[`${uniquePchPartAndNumbersStr}; Копия: НЗ-РБ, зам РБ-рег-${uniqueRegionsStr}, РЦДМ, ДИЦУСИ.`]];
        debugger        

        // -------------- / Уникальные Регионы ------------



        // ------------------------------------ Первая строка телеграммы ----------------------------------------




        // forExcelAndPageRenderingData = speedRestrictionsAoACreator(forAoACreatorAoO);

        // ------------------ Запишем собранные данные в объект ----------------------
        // returnedDataObject.AoO = forAoACreatorAoO;
        // returnedDataObject.forXLSXAoA = forExcelAndPageRenderingData.forXLSXAoA
        // returnedDataObject.forBrowserPageRenderObj = forExcelAndPageRenderingData.forBrowserPageRenderObj
        // ------------------ / Запишем собранные данные в объект --------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / Расчитаем данные для телеграммы по видео  ---------------------------------------