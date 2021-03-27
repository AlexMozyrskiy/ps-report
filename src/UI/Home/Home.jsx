import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import {
  getIsWorkBookDataLoadedSelector,
  calculateAllDataForTheReportOcKmSheetSmartSelector,
  calculateAllDataForTheReportOtstSheetSmartSelector,
  getReportForDaySelector, getWorkBookOcKmSheetDataSelector
} from "../../state/features/workBookData/selectors";
import {
  setReportForDayActionCreator
} from "../../state/features/workBookData/actionCreators";
import { setWorkBookDataThunkCreator } from "../../state/features/workBookData/thunkCreators";
import { getThirdAndFourthDegreesArr } from "../../helpers/UI/getThirdAndFourthDegreesArr/getThirdAndFourthDegreesArr";
import { Validator } from "../../helpers/Validator/Validator";
import { getUniquePch } from "../../helpers/common/getUniquePch/getUniquePch";

export const Home = () => {

  // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
  const dispatch = useDispatch();
  const OcKmData = useSelector(getWorkBookOcKmSheetDataSelector);
  const ocKmSheetCalculatingData = useSelector(calculateAllDataForTheReportOcKmSheetSmartSelector);       // вычисленные данные для отчета по книге "Оценка КМ" - объект
  const isDataLoaded = useSelector(getIsWorkBookDataLoadedSelector);                                      // загружны ли данные в стейт
  const inputFieldDayValue = useSelector(getReportForDaySelector);
  const otstSheetCalculatingData = useSelector(calculateAllDataForTheReportOtstSheetSmartSelector);       // вычисленные данные для отчета по книге "Отступления" - объект
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
      const data = otstSheetCalculatingData.thirdAndFourthDegrees;      // данные из селектора - массив объектов как и в стейте

      let dataToWrite = getThirdAndFourthDegreesArr(data);              // массив массивов с информаций для записи в xlsx файл


      const wb = XLSX.utils.book_new();                                 // созыдадим новую пустую книгу


      const ws = XLSX.utils.aoa_to_sheet(dataToWrite);                  // создадим лист


      XLSX.utils.book_append_sheet(wb, ws, "3 и 4 степени");                // добавим в созданную книгу лист


      XLSX.writeFile(wb, "1. 3 и 4 степени.xlsx");                             // запишем файл xlsx и передадим его для сохранения пользователю
    } else {                                                            // если не прошли валидацию
      setInputFieldDayValidateErrorText(inputFieldDayValidate.message); // запишем сообщение в локальный стейт и в jsx покажем его пользователю
    }   // / if (inputFieldDayValidate.isValidate)
  }
  // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------


  // ------------------------------------ Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт   ------------------------------------------------
  const onInputFieldDayChange = (inputFieldDayValue) => {
    if (inputFieldDayValidateErrorText !== "") {                                  // если есть текст сохранненной ошибки валидации
      setInputFieldDayValidateErrorText("");                                       // скинем ошибку валидации чтобы она не отображалась на странице
    }
    dispatch(setReportForDayActionCreator(inputFieldDayValue));     // запишем дату за которую нужно сделать отчет в стейт
  }
  // ------------------------------------ / Declare функцию вызывающуюся при вводе дня в поле, записывает введенную дату в стейт  ---------------------------------------------


  // ------------------------------------ Declare функцию вызывающуюся при нажатии кнопки "Загрузить отчет для единых форм ЕКАСУИ" ------------------------------------------------
  const onEKASUIReportButtonClick = () => {
    const uniquePchArr = getUniquePch(OcKmData, inputFieldDayValue);      // массив с уникальными номерами ПЧ
    debugger

    // uniquePchArr.forEach(element => {                                           // для каждого уникального ПЧ
    //   if (+item["ПЧ"] === +element["ПЧ"]) {                                    // если ПЧ в массиве уникальных ПЧ равен ПЧ в массиве данных листа оценка км из стейта

    //   }
    // });
  }
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