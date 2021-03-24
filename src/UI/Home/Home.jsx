import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import {
  getIsWorkBookDataLoadedSelector,
  // calculateAllDataForTheReportOcKmSheetSmartSelector,
  calculateAllDataForTheReportOtstSheetSmartSelector
} from "../../state/features/workBookData/selectors";
import { setWorkBookDataThunkCreator } from "../../state/features/workBookData/thunkCreators";
import { definePicketByMeter } from "../../helpers/common/definePicketByMeter/definePicketByMeter";

export const Home = () => {

  const dispatch = useDispatch();
  // const ocKmSheetCalculatingData = useSelector(calculateAllDataForTheReportOcKmSheetSmartSelector);       // вычисленные данные для отчета по книге "Оценка КМ" - объект
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

  const onSaveButtonClick = () => {
    const data = otstSheetCalculatingData.thirdDegrees;     // данные из селектора - массив объектов как и в стейте

    let dataToWrite = [];

    data.forEach((item, i) => {
      const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

      const pkMetr = definePicketByMeter(item["М"]) + "/" + item["М"];      // пикет и метр в формате "5/214"
      const setSpeed = item["СК_УСТ_ПАСС"] + "/" + item["СК_УСТ_ГРУЗ"];     // установленная скорость в формате "80/80"
      const faultDecoding = item["ОТСТУПЛЕНИЕ"] + " " + item["АМПЛИТУДА"] + "/" + item["ДЛИНА"];  // причина неисправности в формате "П 16/12"

      arr.push(item["ПС"], ++i, item["ПЧ"], "", item["ПУТЬ"], item["KM"], pkMetr, setSpeed, "", "", item["СТЕПЕНЬ"], faultDecoding);
      dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
    });

    /* make the worksheet */
    const ws = XLSX.utils.aoa_to_sheet(dataToWrite);

    /* add to workbook */
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "3 degrees");

    /* generate an XLSX file */
    XLSX.writeFile(wb, "3 degrees.xlsx");
  }


  return (
    <>
      <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} />

      {
        isDataLoaded ? <span style={{ width: "100px", height: "50px" }} onClick={onSaveButtonClick}>Загрузить файл с 3 степенями</span> : <div>Данные не загружены</div>
      }
    </>
  );
}