import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectIsWorkBookDataLoaded, selectReportForDay, selectCalculatedDataShortStraightenings } from "../../../../state/features/workBookData/selectors";
import { AlertLogicAndTable } from "../../common/AlertLogicAndTable";

export const ShortStraightenings = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const isDataLoaded = useSelector(selectIsWorkBookDataLoaded);                       // загружны ли данные в стейт
    const calculatingData = useSelector(selectCalculatedDataShortStraightenings);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onSaveButtonClick = () => {

        const data = calculatingData.AoA;                                   // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "Короткие рихтовки.xlsx",                                               // имя создаваемой отчетной книги
            "Короткие рихтовки"                                                     // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    // ------------------------------------ AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы -----------------------------------------
    // let calculatingDataWithoutHeadAoA = calculatingData.AoA.filter(item => item[0] !== "Дистанция пути");                        // если 0 индекс это заголовок, не добавляем его в новый массив
    // ------------------------------------ / AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы ---------------------------------------

    return (
        <div></div>

        // <AlertLogicAndTable
        //     calculatingDataFromSelector={calculatingData}
        //     calculatingDataWithoutHeadAoA={calculatingDataWithoutHeadAoA}
        //     reportForDate={reportForDate}
        //     isDataLoaded={isDataLoaded}
        //     tableCaption="Таблица Короткие рихтовки для Единых Форм"
        //     buttonText="Скачать файл Короткие рихтовки для Единых Форм"
        //     onSaveButtonClick={onSaveButtonClick}
        // />


    );
}