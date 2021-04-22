import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectReportForDay, selectCalculatedDataRepeatabilityAnalysis } from "../../../../state/features/workBookData/selectors";
import { WithRequiredUploadedFlesCount } from "../../../../HOC/WithRequiredUploadedFilesCount";
import { AlertLogicAndTable } from "../../common/AlertLogicAndTable";

export const RepeatabilityAnalysis = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const calculatingData = useSelector(selectCalculatedDataRepeatabilityAnalysis);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onSaveButtonClick = () => {

        const data = calculatingData.forXLSXAoA;                                   // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "Анализ повторяемости.xlsx",                                               // имя создаваемой отчетной книги
            "Анализ повторяемости"                                                     // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    return (

        <WithRequiredUploadedFlesCount
            requireUploadTrackGeomуtryFilesCount={3}
            requireUploadVideoFilesCount={0}
            forBrowserPageRenderObj={calculatingData.forBrowserPageRenderObj}
            reportForDate={reportForDate}
            tableCaption="Таблица Анализ повторяемости"
            buttonText="Скачать файл Анализ повторяемости"
            onSaveButtonClick={onSaveButtonClick}
            Component={AlertLogicAndTable}
        />


    );
}