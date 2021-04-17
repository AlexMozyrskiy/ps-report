/*
Компонент будет использоваться на каждой странице для скачивания отчетов
Логика если не загружен файл с данными или не введена дата и таблица отобрадаемая в браузере
*/

import { Alert, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const AlertLogicAndTable = (props) => {
    let {calculatingDataFromSelector, calculatingDataWithoutHeadAoA, reportForDate, isDataLoaded, tableCaption, buttonText, onSaveButtonClick} = {...props};
    
    return(
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
                            <caption>{tableCaption}</caption>
                            <tr>{calculatingDataFromSelector.scoreAoA[0].map(item => <th>{item}</th>)}</tr>
                            {calculatingDataWithoutHeadAoA.map(item => {
                                return <tr>{item.map(element => <td>{element}</td>)}</tr>
                            })}
                        </table>

                        <Button type="primary" icon={<DownloadOutlined />} onClick={onSaveButtonClick}>{buttonText}</Button>
                    </>
                    : null
            }
        </>
    );
}