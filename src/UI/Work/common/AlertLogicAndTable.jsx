/*
Компонент будет использоваться на каждой странице для скачивания отчетов
Логика если не загружен файл с данными или не введена дата и таблица отобрадаемая в браузере
*/

import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const AlertLogicAndTable = (props) => {
    let { tableCaption, buttonText, onSaveButtonClick } = { ...props };
    let { header, body } = { ...props.forBrowserPageRenderObj }

    return (
        <>
            <>
                <table border="1">
                    <caption>{tableCaption}</caption>
                    <tbody>
                        <tr>{header.map((item, i) => <th key={i}>{item}</th>)}</tr>
                        {body.map((item, i) => {
                            return <tr key={i}>{item.map((element, i) => <td key={i}>{element}</td>)}</tr>
                        })}
                    </tbody>
                </table>

                <Button type="primary" icon={<DownloadOutlined />} onClick={onSaveButtonClick}>{buttonText}</Button>
            </>
        </>
    );
}