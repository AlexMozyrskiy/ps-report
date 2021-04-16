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

    // ------------------------------------ AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы -----------------------------------------
    let thirdAndFourthDegreesWithoutHeadAoA = calculatingData.thirdAndFourthDegreesAoA.filter(item => item[0] !== "ПС");                        // если 0 индекс это заголовок, не добавляем его в новый массив
    debugger
    // ------------------------------------ / AoA без заголовка для отрисовки основного тела таблицы (без заголовка) на этой страницы ---------------------------------------

    return (
        <>
            {/* <table border="1">
                <caption>Таблица размеров обуви</caption>
                <tr>
                    <th>Россия</th>
                    <th>Великобритания</th>
                    <th>Европа</th>
                    <th>Длина ступни, см</th>
                </tr>
                <tr><td>34,5</td><td>3,5</td><td>36</td><td>23</td></tr>
                <tr><td>35,5</td><td>4</td><td>36⅔</td><td>23–23,5</td></tr>
                <tr><td>36</td><td>4,5</td><td>37⅓</td><td>23,5</td></tr>
                <tr><td>36,5</td><td>5</td><td>38</td><td>24</td></tr>
                <tr><td>37</td><td>5,5</td><td>38⅔</td><td>24,5</td></tr>
                <tr><td>38</td><td>6</td><td>39⅓</td><td>25</td></tr>
                <tr><td>38,5</td><td>6,5</td><td>40</td><td>25,5</td></tr>
                <tr><td>39</td><td>7</td><td>40⅔</td><td>25,5–26</td></tr>
                <tr><td>40</td><td>7,5</td><td>41⅓</td><td>26</td></tr>
                <tr><td>40,5</td><td>8</td><td>42</td><td>26,5</td></tr>
                <tr><td>41</td><td>8,5</td><td>42⅔</td><td>27</td></tr>
                <tr><td>42</td><td>9</td><td>43⅓</td><td>27,5</td></tr>
                <tr><td>43</td><td>9,5</td><td>44</td><td>28</td></tr>
                <tr><td>43,5</td><td>10</td><td>44⅔</td><td>28–28,5</td></tr>
                <tr><td>44</td><td>10,5</td><td>45⅓</td><td>28,5–29</td></tr>
                <tr><td>44,5</td><td>11</td><td>46</td><td>29</td></tr>
                <tr><td>45</td><td>11,5</td><td>46⅔</td><td>29,5</td></tr>
                <tr><td>46</td><td>12</td><td>47⅓</td><td>30</td></tr>
                <tr><td>46,5</td><td>12,5</td><td>48</td><td>30,5</td></tr>
                <tr><td>47</td><td>13</td><td>48⅔</td><td>31</td></tr>
                <tr><td>48</td><td>13,5</td><td>49⅓</td><td>31,5</td></tr>
            </table> */}
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
                            <tr>{calculatingData.thirdAndFourthDegreesAoA[0].map(item => <th>{item}</th>)}</tr>
                            {thirdAndFourthDegreesWithoutHeadAoA.map(item => {
                                return <tr>{item.map(element => <td>{element}</td>)}</tr>
                            })}
                        </table>

                        <Button type="primary" icon={<DownloadOutlined />} onClick={onThirdDegreesSaveButtonClick}>Скачать файл с 3 и 4 степенями</Button>
                    </>
                    : null
            }
        </>


    );
}