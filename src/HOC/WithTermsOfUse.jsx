/*
    Если пользователь не согласился с "Условиями использования сайта" вернет сообщение об этом, в противном случае вернет компонент переданный в данный HOC
*/
import React from "react";
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import {
    selectIsUserAgreesWithTermsOfUse
} from "../state/features/termsOfUse/selectors";


export const WithTermsOfUse = (props) => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const isUserAgreesWithTermsOfUse = useSelector(selectIsUserAgreesWithTermsOfUse);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    if(!isUserAgreesWithTermsOfUse) {
        return (
            <Alert message="Вы НЕ согласились с Пользовательским Соглашением. Использование этого сайта невозможно" type="error" showIcon />
        );
    } else {
        return <props.component />
    }
}