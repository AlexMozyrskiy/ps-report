import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import {
  getIsWorkBookDataLoadedSelector,
  // calculateAllDataForTheReportOcKmSheetSmartSelector,
  calculatedAllDataForTheReportSmartSelector,
  getReportForDaySelector, getWorkBookOcKmSheetDataSelector,
  getWorkBookOtstSheetDataSelector
} from "../../state/features/workBookData/selectors";
import {
  setReportForDayActionCreator
} from "../../state/features/workBookData/actionCreators";
import { setWorkBookDataThunkCreator } from "../../state/features/workBookData/thunkCreators";
import { createThirdAndFourthDegreesAoA } from "../../helpers/UI/aoaCreators/thirdAndFourthDegreesAoaCreator/createThirdAndFourthDegreesAoA";
import { Validator } from "../../helpers/Validator/Validator";
import { getUniquePch } from "../../helpers/common/getUniquePch/getUniquePch";
import { calculateMagnitudeN } from "../../helpers/common/calculateMagnitudeN/calculateMagnitudeN";
import { sheetOcKmConst, sheetOtstConst } from "../../CONSTS/sheetsHeaderConsts";
import { createAndUploadWorkBook } from "../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";
import { createEKASUIReportAoA } from "../../helpers/UI/aoaCreators/EKASUIReportAoaCreator/createEKASUIReportAoA";

export const Home = () => {

  // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
  const dispatch = useDispatch();
  const ocKmData = useSelector(getWorkBookOcKmSheetDataSelector);
  // const otstData = useSelector(getWorkBookOtstSheetDataSelector);
  // const ocKmSheetCalculatingData = useSelector(calculateAllDataForTheReportOcKmSheetSmartSelector);       // вычисленные данные для отчета по книге "Оценка КМ" - объект
  const isDataLoaded = useSelector(getIsWorkBookDataLoadedSelector);                                      // загружны ли данные в стейт
  const inputFieldDayValue = useSelector(getReportForDaySelector);
  const calculatingData = useSelector(calculatedAllDataForTheReportSmartSelector);       // вычисленные данные для отчета по книге "Отступления" - объект
  const [inputFieldDayValidateErrorText, setInputFieldDayValidateErrorText] = useState("");               // текст ошибки при валидации инпута даты за которое делать отчет
  // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------




  // ------------------------------------ Declare функцию вызывающуюся при загрузке файла ------------------------------------------------
  const onBookSelect = (evt) => {
    let worBookData;                                    // возвращаем json
    const selectedFile = evt.target.files[0];           // выбранный в браузере файл, один, так как запрещен мульти выбор файлов

    if (selectedFile) {                                 // если файл был выбран. эта проверка чтобы если пользователь нажал кнопку выбрать файл а потом закрыл окно с выбором файла не выбрав его
      let reader = new FileReader();
      reader.readAsBinaryString(selectedFile);
      reader.onload = function (event) {

        const data = event.target.result;
        const workBook = XLSX.read(data, {
          type: 'binary'
        });

        const workSheetOtstDataObj = workBook.Sheets["Отступления"];
        const workSheetOtstDataJson = XLSX.utils.sheet_to_json(workSheetOtstDataObj);

        const workSheetOcKmDataObj = workBook.Sheets["Оценка КМ"];
        const workSheetOcKmDataJson = XLSX.utils.sheet_to_json(workSheetOcKmDataObj);


        worBookData = {
          otstSheetData: workSheetOtstDataJson,
          ocKmSheetData: workSheetOcKmDataJson
        }

        dispatch(setWorkBookDataThunkCreator(worBookData));
      };

      reader.onerror = function (event) {
        worBookData = null
        console.error("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
      };
    }
  }
  // ------------------------------------ / Declare функцию вызывающуюся при загрузке файла ----------------------------------------------


  // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
  const onThirdDegreesSaveButtonClick = () => {

    // ------------------------------------- Валидируем --------------------------------------
    let inputFieldDayValidator = new Validator(inputFieldDayValue, { required: true, notNumberNull: true, isInteger: true, isPositive: true, isNumber: true });
    const inputFieldDayValidate = inputFieldDayValidator.validate();
    /* в validate из функции вернется объект вида
    {isValidate: false, message: "Это поле обязательно для заполнения"} - если не прошли валижацию
    или 
    {isValidate: true, message: ""} - если прошли валижацию  */
    // ------------------------------------- / Валидируем ------------------------------------

    if (inputFieldDayValidate.isValidate) {                             // если прошли Валидацию
      const data = calculatingData.thirdAndFourthDegreesAoA;            // данные из селектора - массив массивов для формирования отчетной xlsx книги

      createAndUploadWorkBook(                                          // преобразует их в массив массивов для записи в книгу и предлагает пользователю эту книгу скачать
        data,                                                           // данные для записи типа как в стейте
        "1. 3 и 4 степени.xlsx",                                        // имя создаваемой отчетной книги
        "3 и 4 степени"                                                 // имя листа в этой книге
      );
    } else {                                                            // если не прошли валидацию
      setInputFieldDayValidateErrorText(inputFieldDayValidate.message); // запишем сообщение в локальный стейт и в jsx покажем его пользователю
    }   // / if (inputFieldDayValidate.isValidate)
  }
  // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------


  // ------------------------------------ Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт   ------------------------------------------------
  const onInputFieldDayChange = (inputFieldDayValue) => {
    if (inputFieldDayValidateErrorText !== "") {                                  // если есть текст сохранненной ошибки валидации
      setInputFieldDayValidateErrorText("");                                      // скинем ошибку валидации чтобы она не отображалась на странице
    }
    dispatch(setReportForDayActionCreator(inputFieldDayValue));                   // запишем дату за которую нужно сделать отчет в стейт
  }
  // ------------------------------------ / Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт  ---------------------------------------------


  // ------------------------------------ Declare функцию вызывающуюся при нажатии кнопки "Загрузить отчет для единых форм ЕКАСУИ" ------------------------------------------------
  const onEKASUIReportButtonClick = () => {

    let inputFieldDayValidator = new Validator(inputFieldDayValue, { required: true, notNumberNull: true, isInteger: true, isPositive: true, isNumber: true });
    const inputFieldDayValidate = inputFieldDayValidator.validate();

    if (inputFieldDayValidate.isValidate) {                                 // если прошли валидацию
      const uniquePchArr = getUniquePch(ocKmData, inputFieldDayValue);      // массив с уникальными номерами ПЧ

      let otlKm = 0, xorKm = 0, UdKm = 0, neUdKm = 0, secondDegreesCount = 0, thirdDegreesCount = 0, fourthDegreesCount = 0;
      let narrowingTotalCount = 0, wideningTotalCount = 0, levelTotalCount = 0, reconsiderTotalCount = 0, drawdownTotalCount = 0, planAngleTotalCount = 0;
      let magnitudeN = 0;                                                   // величина Nуч
      let dataForTableEKASUI = [];                                          // массив объектов тпа:


      uniquePchArr.forEach(element => {                                     // для каждого уникального ПЧ

        // ----------------- Вычислим километры по видам (отл, хор ...) --------------------------------
        ocKmData.forEach(el => {                                            // для каждого объекта в листе оц км (строчки excel)
          if (element === el[sheetOcKmConst.RAILWAY_DISTANCE]) {            // для каждого ПЧ посчитаем отл, хор ... километры
            if (el[sheetOcKmConst.GRADE] === 5 && el[sheetOcKmConst.DAY] === +inputFieldDayValue) otlKm = +(otlKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
            if (el[sheetOcKmConst.GRADE] === 4 && el[sheetOcKmConst.DAY] === +inputFieldDayValue) xorKm = +(xorKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
            if (el[sheetOcKmConst.GRADE] === 3 && el[sheetOcKmConst.DAY] === +inputFieldDayValue) UdKm = +(UdKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
            if (el[sheetOcKmConst.GRADE] === 2 && el[sheetOcKmConst.DAY] === +inputFieldDayValue) neUdKm = +(neUdKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
          }
        });
        secondDegreesCount = calculatingData.secondDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length; // количество вторых степеней текущей дистанции
        thirdDegreesCount = calculatingData.thirdDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length;   // количество третьих степеней текущей дистанции
        fourthDegreesCount = calculatingData.fourthDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length; // количество четвертых степеней текущей дистанции
        narrowingTotalCount = calculatingData.narrowingTotalCount.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length;  // количество сужений за день текущей дистанции
        wideningTotalCount = calculatingData.wideningTotalCount.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length;  // количество уширений за день текущей дистанции
        levelTotalCount = calculatingData.levelTotalCount.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length;  // количество уровней за день текущей дистанции
        reconsiderTotalCount = calculatingData.reconsiderTotalCount.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length;  // количество перекосов за день текущей дистанции
        drawdownTotalCount = calculatingData.drawdownTotalCount.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length;  // количество просадок за день текущей дистанции
        planAngleTotalCount = calculatingData.planAngleTotalCount.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === element).length;  // количество рихтовок за день текущей дистанции
        // ----------------- / Вычислим километры по видам (отл, хор ...) ------------------------------

        // -------------------- Вычислим величину Nуч ----------------------------------
        magnitudeN = calculateMagnitudeN(otlKm, xorKm, UdKm, neUdKm);       // Величина Nуч
        // -------------------- / Вычислим величину Nуч --------------------------------


        dataForTableEKASUI.push({         // запишем результат вычислений в массив
          pch: element, otlKm, xorKm, UdKm, neUdKm, secondDegreesCount, thirdDegreesCount, fourthDegreesCount, magnitudeN,
          narrowingTotalCount, wideningTotalCount, levelTotalCount, reconsiderTotalCount, drawdownTotalCount, planAngleTotalCount
        });
        otlKm = xorKm = UdKm = neUdKm = secondDegreesCount = thirdDegreesCount = fourthDegreesCount = 0;
      });

      // создадим книгу с отчетом и предложим пользователю ее скачать

      createAndUploadWorkBook(                                          // преобразует их в массив массивов для записи в книгу и предлагает пользователю эту книгу скачать
        createEKASUIReportAoA(dataForTableEKASUI),                                                           // данные для записи типа как в стейте
        "2. Отчет в Ед Формы Для Екасуи.xlsx",                                        // имя создаваемой отчетной книги
        "Отчет в Ед Формы Для Екасуи"                                                 // имя листа в этой книге
      );
      console.log(dataForTableEKASUI);
    } else {
      setInputFieldDayValidateErrorText(inputFieldDayValidate.message); // запишем сообщение в локальный стейт и в jsx покажем его пользователю
    } // / if (inputFieldDayValidate.isValidate)


  }     // / uniquePchArr.forEach
  // ------------------------------------ / Declare функцию вызывающуюся при нажатии кнопки "Загрузить отчет для единых форм ЕКАСУИ"---------------------------------------------




  return (
    <>
      <label>
        <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} />
      </label>
      <p>{ }</p>



      {
        isDataLoaded
          ? <>
            <input placeholder="Введите дату за которую нужно получить отчёт" value={inputFieldDayValue} onChange={(e) => onInputFieldDayChange(e.target.value)} required />
            { inputFieldDayValidateErrorText !== "" ? <p style={{ color: "red" }}>{inputFieldDayValidateErrorText}</p> : null}
            <button onClick={onThirdDegreesSaveButtonClick}>Загрузить файл с 3 и 4 степенями</button>
            <button onClick={onEKASUIReportButtonClick}>Загрузить отчет для единых форм ЕКАСУИ</button>
          </>
          : <div>Данные не загружены</div>
      }
    </>
  );
}