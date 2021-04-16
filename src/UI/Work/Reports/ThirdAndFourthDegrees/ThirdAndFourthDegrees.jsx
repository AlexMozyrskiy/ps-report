import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectIsWorkBookDataLoaded, selectReportForDay, selectCalculatedDataThirdAndFourthDegrees } from "../../../../state/features/workBookData/selectors";
import { Alert, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const ThirdAndFourthDegrees = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const isDataLoaded = useSelector(selectIsWorkBookDataLoaded);                                       // загружны ли данные в стейт
    const calculatingData = useSelector(selectCalculatedDataThirdAndFourthDegrees);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onThirdDegreesSaveButtonClick = () => {

        const data = calculatingData.thirdAndFourthDegreesAoA;            // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "1. 3 и 4 степени.xlsx",                                        // имя создаваемой отчетной книги
            "3 и 4 степени"                                                 // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    return (
        <>
            {
                reportForDate === ""
                ? <Alert message="Не выбрана дата для отчета. Выберите дату во вкладке &ldquo;Настройки и установки&rdquo; &rarr; &ldquo;Основные настройки&rdquo;" type="success" type="error" showIcon />
                : null
            }
            {
                !isDataLoaded
                ? <Alert message="Файл с данными за текущий период не загружен, сначала загрузите файл. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="success" type="error" showIcon />
                : null
            }
            {
                isDataLoaded && reportForDate !== ""
                    ? <Button type="primary" icon={<DownloadOutlined />} onClick={onThirdDegreesSaveButtonClick}>Загрузить файл с 3 и 4 степенями</Button>
                    : null
            }
        </>


    );
}