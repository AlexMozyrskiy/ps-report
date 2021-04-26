import React from "react";
import { Form, Input, Button } from 'antd';
import {
    selectWagonFullName, selectIsSubmitButtonWagonNameClicked
} from "../../../../state/features/wagonInfo/selectors";
import { setWagonFullNameActionCreator, setIsSubmitButtonWagonNameClickedActionCreator } from "../../../../state/features/wagonInfo/actionCreators";
import { useDispatch, useSelector } from "react-redux";

export const GeneralSettingsWagonNameInputForm = () => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const dispatch = useDispatch();
    const wagonFullName = useSelector(selectWagonFullName);
    const isSubmitButtonWagonNameClicked = useSelector(selectIsSubmitButtonWagonNameClicked);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    // ------------------------------------ Declare функцию вызывающуюся при вводе текста в поле ввода имени вагона   ------------------------------------------------
    const onInputChange = (value) => {
        dispatch(setWagonFullNameActionCreator(value));                   // запишем введенное имя вагона в стейт
    }
    // ------------------------------------ / Declare функцию вызывающуюся при вводе текста в поле ввода имени вагона  ---------------------------------------------


    return (
        <>
            <div className="content__input-item">
                <div>Ведите название вагона для использования в телеграмме</div>
                <Form layout="inline">
                    <Form.Item label="Ведите название вагона для использования в телеграмме">
                        <Input placeholder="Название вагона" value={wagonFullName} onChange={(e) => onInputChange(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={() => dispatch(setIsSubmitButtonWagonNameClickedActionCreator(true))}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}