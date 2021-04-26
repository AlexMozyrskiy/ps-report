/*
Компонент будет использоваться на каждой странице для скачивания телеграмм
Логика если не загружен файл с данными или не введена дата и таблица отображаемая в браузере
*/

import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const AlertLogicAndTelegram = (props) => {
    let { tableCaption, buttonText, onSaveButtonClick } = { ...props };
    let body = props.forBrowserPageRenderObj;
    debugger

    return (
        <>
            <>
                <table border="0">
                    <caption>{tableCaption}</caption>
                    <tbody>
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