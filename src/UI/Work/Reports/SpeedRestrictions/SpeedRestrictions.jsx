import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectIsWorkBookDataLoaded, selectReportForDay, selectCalculatedDataSpeedRestrictions } from "../../../../state/features/workBookData/selectors";
import { AlertLogicAndTable } from "../../common/AlertLogicAndTable";

export const SpeedRestrictions = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const isDataLoaded = useSelector(selectIsWorkBookDataLoaded);                       // загружны ли данные в стейт
    const calculatingData = useSelector(selectCalculatedDataSpeedRestrictions);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onSaveButtonClick = () => {

        const data = calculatingData.AoA;                                   // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "Справка по ограничениям.xlsx",                                               // имя создаваемой отчетной книги
            "Справка по ограничениям"                                                     // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    // ------------------------------------ AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы -----------------------------------------
    let calculatingDataWithoutHeadAoA = calculatingData.AoA.filter(item => item[0] !== " №     п/п");                        // если 0 индекс это заголовок, не добавляем его в новый массив
    // ------------------------------------ / AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы ---------------------------------------

    return (

        <AlertLogicAndTable
            calculatingDataFromSelector={calculatingData}
            calculatingDataWithoutHeadAoA={calculatingDataWithoutHeadAoA}
            reportForDate={reportForDate}
            isDataLoaded={isDataLoaded}
            tableCaption="Таблица Справка по ограничениям для Единых Форм"
            buttonText="Скачать файл Справка по ограничениям для Единых Форм"
            onSaveButtonClick={onSaveButtonClick}
        />


    );
}