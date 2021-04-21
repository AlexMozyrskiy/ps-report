import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectReportForDay, selectCalculatedDataSpeedRestrictions } from "../../../../state/features/workBookData/selectors";
import { WithRequiredUploadedFlesCount } from "../../../../HOC/WithRequiredUploadedFilesCount";
import { AlertLogicAndTable } from "../../common/AlertLogicAndTable";

export const SpeedRestrictions = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const calculatingData = useSelector(selectCalculatedDataSpeedRestrictions);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onSaveButtonClick = () => {

        const data = calculatingData.forXLSXAoA;                                   // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "Справка по ограничениям.xlsx",                                               // имя создаваемой отчетной книги
            "Справка по ограничениям"                                                     // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    return (

        <WithRequiredUploadedFlesCount
            requireUploadTrackGeomуtryFilesCount={1}
            requireUploadVideoFilesCount={0}
            forBrowserPageRenderObj={calculatingData.forBrowserPageRenderObj}
            reportForDate={reportForDate}
            tableCaption="Таблица Справка по ограничениям для Единых Форм"
            buttonText="Скачать файл Справка по ограничениям для Единых Форм"
            onSaveButtonClick={onSaveButtonClick}
            Component={AlertLogicAndTable}
        />
    );
}