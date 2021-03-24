import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import {
  getIsWorkBookDataLoadedSelector,
  calculateAllDataForTheReportOcKmSheetSmartSelector,
  calculateAllDataForTheReportOtstSheetSmartSelector
} from "../../state/features/workBookData/selectors";
import { setWorkBookDataThunkCreator } from "../../state/features/workBookData/thunkCreators";

export const Home = () => {

  const dispatch = useDispatch();
  const ocKmSheetCalculatingData = useSelector(calculateAllDataForTheReportOcKmSheetSmartSelector);       // вычисленные данные для отчета по книге "Оценка КМ" - объект
  const otstSheetCalculatingData = useSelector(calculateAllDataForTheReportOtstSheetSmartSelector);       // вычисленные данные для отчета по книге "Отступления" - объект
  const isDataLoaded = useSelector(getIsWorkBookDataLoadedSelector);                                      // загружны ли данные в стейт

  console.log(otstSheetCalculatingData.thirdDegrees);

  const onBookSelect = (evt) => {
    let worBookData;                                    // возвращаем json
    const selectedFile = evt.target.files[0];           // выбранный в браузере файл, один, так как запрещен мульти выбор файлов
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


  return (
    <>
      <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} />

      {
        isDataLoaded ? <div>Проверено Км: {ocKmSheetCalculatingData.totalCheckedKilometers}</div> : <div>Данные не загружены</div>
      }
    </>
  );
}