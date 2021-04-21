/*
Компонент будет использоваться на каждой странице для скачивания отчетов
Логика если не загружен файл с данными или не введена дата и таблица отобрадаемая в браузере
*/

import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const AlertLogicAndTable = (props) => {
    let { tableCaption, buttonText, onSaveButtonClick } = { ...props };
    let { header, body } = { ...props.forBrowserPageRenderObj }
    debugger

    return (
        <>
            <>
                <table border="1">
                    <caption>{tableCaption}</caption>
                    <tr>{header.map(item => <th>{item}</th>)}</tr>
                    {body.map(item => {
                        return <tr>{item.map(element => <td>{element}</td>)}</tr>
                    })}
                </table>

                <Button type="primary" icon={<DownloadOutlined />} onClick={onSaveButtonClick}>{buttonText}</Button>
            </>
        </>
    );
}