import { DatePicker } from "antd";
import React from "react";
import moment from 'moment';
import {
    selectReportForDay, selectReportForMonth,
    selectReportForYear
} from "../../../../state/features/workBookData/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setDateActionCreator } from "../../../../state/features/workBookData/actionCreators";

export const GeneralSettingsDatePicker = () => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const dispatch = useDispatch();
    const reportForDay = useSelector(selectReportForDay);
    const reportForMonth = useSelector(selectReportForMonth);
    const reportForYear = useSelector(selectReportForYear);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    // ------------------------------------------ Если дата в стейте зписана вернем ее из этой функции в нужном формате ------------------------------
    const dateFromState = () => {
        const day = +reportForDay < 10 ? `0${reportForDay}` : String(reportForDay);
        const month = +reportForMonth < 10 ? `0${reportForMonth}` : String(reportForMonth);
        return `${reportForYear}-${month}-${day}`;
    }
    // ------------------------------------------ / Если дата в стейте зписана вернем ее из этой функции в нужном формате ----------------------------


    // ------------------------------------ Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт   ------------------------------------------------
    const onDatePickerChange = (day, month, year) => {
        // if (inputFieldDayValidateErrorText !== "") {                                  // если есть текст сохранненной ошибки валидации
        //     setInputFieldDayValidateErrorText("");                                      // скинем ошибку валидации чтобы она не отображалась на странице
        // }
        dispatch(setDateActionCreator(day, month + 1, year));                   // запишем дату за которую нужно сделать отчет в стейт
    }
    // ------------------------------------ / Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт  ---------------------------------------------


    return (
        <>
            <div className="content__input-item">
                <div>Выберите дату для отчета</div>
                <DatePicker placeholder={"Выберите Дату"}
                    defaultValue={reportForDay === "" ? null : moment(dateFromState(), 'YYYY-MM-DD')}               // если дата в стейте есть поставим по умолчанию ее 
                    onChange={(e) => onDatePickerChange(e._d.getDate(), e._d.getMonth(), e._d.getFullYear())}
                />
            </div>
        </>
    );
}