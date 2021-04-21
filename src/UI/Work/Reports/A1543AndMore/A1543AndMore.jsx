import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectReportForDay, selectCalculatedData1543AndMore } from "../../../../state/features/workBookData/selectors";
import { WithRequiredUploadedFlesCount } from "../../../../HOC/WithRequiredUploadedFilesCount";
import { AlertLogicAndTable } from "../../common/AlertLogicAndTable";

export const A1543AndMore = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const calculatingData = useSelector(selectCalculatedData1543AndMore);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onSaveButtonClick = () => {

        const data = calculatingData.forXLSXAoA;                                   // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "Шаблон 1543 и более.xlsx",                                               // имя создаваемой отчетной книги
            "Шаблон 1543 и более"                                                     // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    return (

        <WithRequiredUploadedFlesCount
            requireUploadTrackGeomуtryFilesCount={1}
            requireUploadVideoFilesCount={0}
            forBrowserPageRenderObj={calculatingData.forBrowserPageRenderObj}
            reportForDate={reportForDate}
            tableCaption="Таблица Шаблон 1543 и более"
            buttonText="Скачать файл Шаблон 1543 и более"
            onSaveButtonClick={onSaveButtonClick}
            Component={AlertLogicAndTable}
        />


    );
}