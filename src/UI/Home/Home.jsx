import React, { useState } from "react";
import { useDispatch } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import { getWorkBookOtstSheetDataSelector } from "../../state/features/workBookData/selectors";
import { setWorkBookDataActionCreator } from "../../state/features/workBookData/actionCreators";

export const Home = () => {

  const dispatch = useDispatch();

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

      const workSheetOcKmDataObj = workBook.Sheets["Оценка КМ"];
      const workSheetOcKmDataJson = XLSX.utils.sheet_to_json(workSheetOcKmDataObj);

      let worBookData = {
        otstSheetData: workSheetOtstDataJson,
        ocKmSheetData: workSheetOcKmDataJson
      }

      dispatch(setWorkBookDataActionCreator(worBookData));



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


  return (
    <>
      <input type="file" id="input_dom_element" onChange={(e) => handleFile(e)} />
    </>
  );
}