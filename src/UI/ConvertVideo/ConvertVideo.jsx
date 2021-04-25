import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import { selectCalculatedDataVideoFromArm, selectIsVideoBookDataLoaded } from "../../state/features/videoBookData/selectors";
import { setVideoBookDataThunkCreator } from "../../state/features/videoBookData/thunkCreators";
import { createAndUploadWorkBook } from "../../helpers/common/createAndUploadWorkBook/createAndUploadWorkBook";


export const ConvertVideo = () => {

  // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(selectIsVideoBookDataLoaded);                                      // загружны ли данные в стейт
  const calculatingData = useSelector(selectCalculatedDataVideoFromArm);                                      // загружны ли данные в стейт
  // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------




  // ------------------------------------ Declare функцию вызывающуюся при загрузке файла ------------------------------------------------
  const onBookSelect = (evt) => {
    let workBookData;                                    // возвращаем json
    const selectedFile = evt.target.files[0];           // выбранный в браузере файл, один, так как запрещен мульти выбор файлов

    if (selectedFile) {                                 // если файл был выбран. эта проверка чтобы если пользователь нажал кнопку выбрать файл а потом закрыл окно с выбором файла не выбрав его
      let reader = new FileReader();
      reader.readAsBinaryString(selectedFile);
      reader.onload = function (event) {

        const data = event.target.result;
        const workBook = XLSX.read(data, {
          type: 'binary'
        });

        const videoDataObj = workBook.Sheets["Лист1"];
        const videoDataObjJson = XLSX.utils.sheet_to_json(videoDataObj);


        workBookData = {
          videoData: videoDataObjJson
        }

        dispatch(setVideoBookDataThunkCreator(workBookData));
      };

      reader.onerror = function (event) {
        workBookData = null
        console.error("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
      };
    }
  }
  // ------------------------------------ / Declare функцию вызывающуюся при загрузке файла ----------------------------------------------

  // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------
  const onSaveButtonClick = () => {
    const data = calculatingData.templateVideoAoA;                       // данные из селектора - массив массивов для формирования отчетной xlsx книги

    createAndUploadWorkBook(                                            // Создает и предлагает скачать юзеру книгу со сформированным отчетом
      data,                                                           // данные для записи
      "3. Шаблон Видео.xlsx",                          // имя создаваемой отчетной книги
      "Шаблон Видео"                                   // имя листа в этой книге
    );
  }
  // ------------------------------------ Declare функцию вызывающуюся при нажатии на кнопку для выгрузки третьих степеней ------------------------------------------------



  return (
    <>
      {
        isDataLoaded
          ? <>
            <h2>Данные успешно загружены</h2>
            <button onClick={onSaveButtonClick}>Save</button>
          </>
          : <>
            <h2>Данные не загружены, сначала загрузите данные</h2>
            <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} />
          </>
      }
    </>
  );
}