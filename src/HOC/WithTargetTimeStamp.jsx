/*
    Если 15 дней с 23.04.2021 истекло покажет сообщение о истечении лицензии и завершит выполнение программы, в противном случае вернет компонент переданный в данный HOC
*/
import React from "react";
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import {
    selectTargetTimeStamp
} from "../state/features/termsOfUse/selectors";


export const WithTargetTimeStamp = (props) => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const targetTimeStamp = useSelector(selectTargetTimeStamp);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    if(Date.now() > targetTimeStamp) {
        return (
            <Alert message="Время лицензионного использования ПО завершено, обратитесь к админстратору" type="error" showIcon />
        );
    } else {
        return <props.Component />
    }
}