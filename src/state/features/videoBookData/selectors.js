import { createSelector } from "reselect";
import { createTemplateVideoAoA } from "../../../helpers/UI/aoaCreators/templateVideoAoACreator/templateVideoAoACreator";

export const selectVideoBookData = (state) => {
    return state.videoBookData.videoSheetData;
}

export const selectIsVideoBookDataLoaded = (state) => {
    return state.videoBookData.isVideoBookDataLoaded;
}

export const selectIsVideoBookDataLoading = (state) => {
    return state.videoBookData.isVideoBookDataLoading;
}

// ------------- Из информации в стейте выгруженной из книги которая с помощью "ctrl + e" выгрузилась из АРМ видео создадим массив массивов для создания книги для Шаблона Видео ----------------
export const selectCalculatedDataVideoFromArm = createSelector(
    selectVideoBookData,
    data => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив массивов переделываем из data, то есть из онформации стейта - для формаирования книги "Для Шаблон Видео"
        let templateVideoAoA = [];

        // ---------------- массив массивов для формаирования книги "Для Шаблон Видео" ------------------------
        templateVideoAoA = createTemplateVideoAoA(data);
        // ---------------- / массив массивов для формаирования книги "Для Шаблон Видео" ----------------------

    }
);
// ------------- / Из информации в стейте выгруженной из книги которая с помощью "ctrl + e" выгрузилась из АРМ видео создадим массив массивов для создания книги для Шаблона Видео --------------
