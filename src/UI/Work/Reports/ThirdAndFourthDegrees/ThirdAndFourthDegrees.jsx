import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectIsWorkBookDataLoaded, selectReportForDay, selectCalculatedDataThirdAndFourthDegrees } from "../../../../state/features/workBookData/selectors";
import { AlertLogicAndTable } from "../../common/AlertLogicAndTable";

export const ThirdAndFourthDegrees = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const isDataLoaded = useSelector(selectIsWorkBookDataLoaded);                                       // загружны ли данные в стейт
    const calculatingData = useSelector(selectCalculatedDataThirdAndFourthDegrees);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onSaveButtonClick = () => {

        const data = calculatingData.AoA;            // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "1. 3 и 4 степени.xlsx",                                        // имя создаваемой отчетной книги
            "3 и 4 степени"                                                 // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    // ------------------------------------ AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы -----------------------------------------
    let calculatingDataWithoutHeadAoA = calculatingData.AoA.filter(item => item[0] !== "ПС");                        // если 0 индекс это заголовок, не добавляем его в новый массив
    // ------------------------------------ / AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы ---------------------------------------

    return (
        
        <AlertLogicAndTable
            calculatingDataFromSelector={calculatingData}
            calculatingDataWithoutHeadAoA={calculatingDataWithoutHeadAoA}
            reportForDate={reportForDate}
            isDataLoaded={isDataLoaded}
            tableCaption="Таблица 3 и 4 степени"
            buttonText="Скачать файл 3 и 4 степени"
            onSaveButtonClick={onSaveButtonClick}
        />
    );
}