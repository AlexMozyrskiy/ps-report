import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import { getWorkBookOtstSheetDataSelector } from "../../state/features/workBookData/selectors";

export const Home = () => {

  let [jsonOcKm, setJsonOcKm] = useState([]);                     // для записи сюда таблицы из Excel в формат json
  let [jsonOtst, setJsonOtst] = useState([]);                     // для записи сюда таблицы из Excel в формат json
  // let [runUseEffect, setRunUseEffect] = useState(true);           // запускать ли useEffect, чтобы он не запустился 2 раза
  let [sum, setSum] = useState(0);
  let otstSheetData = useSelector(getWorkBookOtstSheetDataSelector);
  debugger

  // useEffect(() => {
  //   if (runUseEffect) {

  //     setRunUseEffect(false);
  //   }
  // }, [runUseEffect]);

  function handleFile(evt) {
    var selectedFile = evt.target.files[0];         // выбранный в браузере файл, один, так как запрещен мульти выбор файлов
    var reader = new FileReader();
    reader.onload = function (event) {
      var data = event.target.result;
      var workBook = XLSX.read(data, {
        type: 'binary'
      });

      const workSheetOtstDataObj = workBook.Sheets["Отступления"];
      const workSheetOtstDataJson = XLSX.utils.sheet_to_json(workSheetOtstDataObj);
      setJsonOtst(workSheetOtstDataJson);

      const workSheetOcKmDataObj = workBook.Sheets["Оценка КМ"];
      const workSheetOcKmDataJson = XLSX.utils.sheet_to_json(workSheetOcKmDataObj);
      setJsonOcKm(workSheetOcKmDataJson);



      // workBook.SheetNames.forEach(function (sheetName) {
      //   const workSheetDataObj = workBook.Sheets[sheetName];
      //   const workSheetDataJson = XLSX.utils.sheet_to_json(workSheetDataObj);
      //   console.log(workSheetDataJson)
      // })
    };
    reader.onerror = function (event) {
      console.error("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
    };
    reader.readAsBinaryString(selectedFile);
  }

  console.log(jsonOtst);
  console.log(jsonOcKm);

  if (jsonOcKm.length && sum === 0) {
    let sum1 = jsonOcKm.reduce((prevVal, item) => {
      let km = +item["ПРОВЕРЕНО"]
      let subSum = prevVal + km;
      return +subSum.toFixed(3)
    }, 0);
    setSum(sum1);
  }



  return (
    <>
      <input type="file" id="input_dom_element" onChange={(e) => handleFile(e)} />
      <div>{otstSheetData[0]["ЛИНИЯ"]}</div>
      {
        sum
        ? <div>Всего Километров: {sum}</div>
        : null
      }
    </>
  );
}