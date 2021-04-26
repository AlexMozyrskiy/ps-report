import React from "react";
import { Form, Input } from 'antd';
import { selectInspectionArea } from "../../../../state/features/wagonInfo/selectors";
import { setInspectionAreaActionCreator } from "../../../../state/features/wagonInfo/actionCreators";
import { useDispatch, useSelector } from "react-redux";

/* Пользователь указывает участок проверки от станции к станции */

export const GeneralSettingsInspectionArea = () => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const dispatch = useDispatch();
    const inspectionArea = useSelector(selectInspectionArea);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    // ------------------------------------ Declare функцию вызывающуюся при вводе текста в поле ввода имени вагона   ------------------------------------------------
    const onInputChange = (value) => {
        dispatch(setInspectionAreaActionCreator(value));                   // запишем введенное имя вагона в стейт
    }
    // ------------------------------------ / Declare функцию вызывающуюся при вводе текста в поле ввода имени вагона  ---------------------------------------------


    return (
        <>
            <div className="content__input-item">
                <Form layout="inline">
                    <Form.Item label="Ведите участок проверки">
                        <Input placeholder="Участок проверки" value={inspectionArea} onChange={(e) => onInputChange(e.target.value)} />
                    </Form.Item>
                </Form>
            </div>

        </>
    );
}