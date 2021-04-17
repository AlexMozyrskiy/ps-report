import React from "react";
import { useSelector } from "react-redux";
import { createAndUploadWorkBook } from "../../../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { selectIsWorkBookDataLoaded, selectReportForDay, selectCalculatedDataScore } from "../../../../state/features/workBookData/selectors";
import { Alert, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const Score = () => {

    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const isDataLoaded = useSelector(selectIsWorkBookDataLoaded);                       // загружны ли данные в стейт
    const calculatingData = useSelector(selectCalculatedDataScore);                     // вычисленные данные для отчета на этой странице
    const reportForDate = useSelector(selectReportForDay);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
    const onSaveButtonClick = () => {

        const data = calculatingData.scoreAoA;                              // данные из селектора - массив массивов для формирования отчетной xlsx книги

        createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
            data,                                                           // данные для записи
            "Бальность.xlsx",                                               // имя создаваемой отчетной книги
            "Бальность"                                                     // имя листа в этой книге
        );
    }
    // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

    // ------------------------------------ AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы -----------------------------------------
    let calculatingDataWithoutHeadAoA = calculatingData.scoreAoA.filter(item => item[0] !== "Дистанция пути");                        // если 0 индекс это заголовок, не добавляем его в новый массив
    // ------------------------------------ / AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы ---------------------------------------

    return (
        <>
            {                           // Если не введена Дата
                reportForDate === ""
                    ? <Alert message="Не выбрана дата для отчета. Выберите дату во вкладке &ldquo;Настройки и установки&rdquo; &rarr; &ldquo;Основные настройки&rdquo;" type="success" type="error" showIcon />
                    : null
            }
            {                           // Если не загружен файл xlsx с данными 
                !isDataLoaded
                    ? <Alert message="Файл с данными за текущий период не загружен, сначала загрузите файл. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="success" type="error" showIcon />
                    : null
            }
            {                           // Если файл загружен и дата введена
                isDataLoaded && reportForDate !== ""
                    ? <>
                        <table border="1">
                            <caption>Таблица 3 и 4 степени</caption>
                            <tr>{calculatingData.scoreAoA[0].map(item => <th>{item}</th>)}</tr>
                            {calculatingDataWithoutHeadAoA.map(item => {
                                return <tr>{item.map(element => <td>{element}</td>)}</tr>
                            })}
                        </table>

                        <Button type="primary" icon={<DownloadOutlined />} onClick={onSaveButtonClick}>Скачать файл с 3 и 4 степенями</Button>
                    </>
                    : null
            }
        </>


    );
}