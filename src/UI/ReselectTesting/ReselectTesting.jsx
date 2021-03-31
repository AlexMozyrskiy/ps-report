import React from "react";
import { useSelector } from "react-redux";
// import XLSX from "xlsx/dist/xlsx.full.min";
// import { definePicketByMeter } from "../../helpers/common/definePicketByMeter/definePicketByMeter";
import { getDirectionByCode } from "../../helpers/common/getDirectionByCode/getDirectionByCode";
// import { calculatedAllDataForTheReportSmartSelector } from "../../state/features/workBookData/selectors";
import XLSX from "xlsx/dist/xlsx.full.min";

export const ReselectTesting = () => {

  // const otstSheetCalculatingData = useSelector(calculatedAllDataForTheReportSmartSelector);

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

        const workSheetOtstDataObj = workBook.Sheets["Все направления"];
        const workSheetOtstDataJson = XLSX.utils.sheet_to_json(workSheetOtstDataObj);
        console.log(workSheetOtstDataJson);



        // data is the string type, that contains the contents of the file.
        // filename is the default file name, some browsers allow the user to change this during the save dialog.

        // Note that we use octet/stream as the mimetype
        // this is to prevent some browsers from displaying the 
        // contents in another browser tab instead of downloading the file
        var blob = new Blob([JSON.stringify(workSheetOtstDataJson, null, 2)], {type : 'application/json'});

        const filename = "test.json"

        //IE 10+
        if (window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob, filename);
        }
        else {
          //Everything else
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          document.body.appendChild(a);
          a.href = url;
          a.download = filename;

          setTimeout(() => {
            //setTimeout hack is required for older versions of Safari

            a.click();

            //Cleanup
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }, 1);
        }
      };

      reader.onerror = function (event) {
        worBookData = null
        console.error("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
      };
    }
  }

  function download(data, filename) {
    // data is the string type, that contains the contents of the file.
    // filename is the default file name, some browsers allow the user to change this during the save dialog.

    // Note that we use octet/stream as the mimetype
    // this is to prevent some browsers from displaying the 
    // contents in another browser tab instead of downloading the file
    var blob = new Blob([data], { type: 'octet/stream' });

    //IE 10+
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(blob, filename);
    }
    else {
      //Everything else
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url;
      a.download = filename;

      setTimeout(() => {
        //setTimeout hack is required for older versions of Safari

        a.click();

        //Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 1);
    }
  }

  const writeFile = () => {
    alert(getDirectionByCode(10457));
  }

  return (
    <>
      <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} />
      <button onClick={writeFile}>Тест получить направленние по номеру</button>
    </>
  );
}