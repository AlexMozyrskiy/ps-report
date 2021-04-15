// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { createAndUploadWorkBook } from "../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
// import { Validator } from "../../helpers/Validator/Validator";
// import { selectIsWorkBookDataLoaded, selectReportForDay, selectCalculatedDataMainTelegram } from "../../state/features/workBookData/selectors";
// import { setReportForDayActionCreator } from "../../state/features/workBookData/actionCreators";

// export const Telegrams = () => {

//     // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
//     const dispatch = useDispatch();
//     const isDataLoaded = useSelector(selectIsWorkBookDataLoaded);                                       // загружны ли данные в стейт
//     const calculatingData = useSelector(selectCalculatedDataMainTelegram);                     // вычисленные данные для отчета на этой странице
//     const inputFieldDayValue = useSelector(selectReportForDay);
//     const [inputFieldDayValidateErrorText, setInputFieldDayValidateErrorText] = useState("");           // текст ошибки при валидации инпута даты за которое делать отчет
//     // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------


//     // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
//     const onCommonTelegramSaveButtonClick = () => {

//         // ------------------------------------- Валидируем --------------------------------------
//         let inputFieldDayValidator = new Validator(inputFieldDayValue, { required: true, notNumberNull: true, isInteger: true, isPositive: true, isNumber: true });
//         const inputFieldDayValidate = inputFieldDayValidator.validate();
//         /* в validate из функции вернется объект вида
//         {isValidate: false, message: "Это поле обязательно для заполнения"} - если не прошли валижацию
//         или 
//         {isValidate: true, message: ""} - если прошли валижацию  */
//         // ------------------------------------- / Валидируем ------------------------------------

//         if (inputFieldDayValidate.isValidate) {                             // если прошли Валидацию
//             const data = calculatingData.mainTelegramAoA;                   // данные из селектора - массив массивов для формирования отчетной xlsx книги

//             createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
//                 data,                                                           // данные для записи
//                 "Основная телеграмма.xlsx",                                        // имя создаваемой отчетной книги
//                 "Основная телеграмма"                                                 // имя листа в этой книге
//             );
//         } else {                                                            // если не прошли валидацию
//             setInputFieldDayValidateErrorText(inputFieldDayValidate.message); // запишем сообщение в локальный стейт и в jsx покажем его пользователю
//         }   // / if (inputFieldDayValidate.isValidate)
//     }
//     // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------

//     // ------------------------------------ Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт   ------------------------------------------------
//     const onInputFieldDayChange = (inputFieldDayValue) => {
//         if (inputFieldDayValidateErrorText !== "") {                                  // если есть текст сохранненной ошибки валидации
//             setInputFieldDayValidateErrorText("");                                      // скинем ошибку валидации чтобы она не отображалась на странице
//         }
//         dispatch(setReportForDayActionCreator(inputFieldDayValue));                   // запишем дату за которую нужно сделать отчет в стейт
//     }
//     // ------------------------------------ / Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт  ---------------------------------------------

//     return (
//         <>
//             {
//                 isDataLoaded
//                     ? <>
//                         <input placeholder="Введите дату за которую нужно получить отчёт" value={inputFieldDayValue} onChange={(e) => onInputFieldDayChange(e.target.value)} required />
//                         { inputFieldDayValidateErrorText !== "" ? <p style={{ color: "red" }}>{inputFieldDayValidateErrorText}</p> : null}
//                         <button onClick={onCommonTelegramSaveButtonClick}>Загрузить Телеграмму</button>
//                     </>
//                     : <h3>Файл с данными не загружен, сначала загрузите файл</h3>
//             }
//         </>


//     );
// }