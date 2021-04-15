import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import {
  selectIsWorkBookDataLoaded,
  // calculateAllDataForTheReportOcKmSheetSmartSelector,
  calculatedAllDataForTheReportSmartSelector,
  getReportForDaySelector, selectWorkBookOcKmSheetData,
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

export const WorkLoadBooks = () => {

  // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
  const dispatch = useDispatch();
  const ocKmData = useSelector(selectWorkBookOcKmSheetData);
  // const otstData = useSelector(getWorkBookOtstSheetDataSelector);
  // const ocKmSheetCalculatingData = useSelector(calculateAllDataForTheReportOcKmSheetSmartSelector);       // вычисленные данные для отчета по книге "Оценка КМ" - объект
  const isDataLoaded = useSelector(selectIsWorkBookDataLoaded);                                      // загружны ли данные в стейт
  // const inputFieldDayValue = useSelector(getReportForDaySelector);
  // const calculatingData = useSelector(calculatedAllDataForTheReportSmartSelector);       // вычисленные данные для отчета по книге "Отступления" - объект
  // const [inputFieldDayValidateErrorText, setInputFieldDayValidateErrorText] = useState("");               // текст ошибки при валидации инпута даты за которое делать отчет
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

  return (
    <>
      {
        isDataLoaded
          ? <>
            <h2>Данные успешно загружены</h2>
          </>
          : <>
          <h2>Данные не загружены, сначала загрузите данные</h2>
          <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} />
            </> 
      }
    </>
  );
}