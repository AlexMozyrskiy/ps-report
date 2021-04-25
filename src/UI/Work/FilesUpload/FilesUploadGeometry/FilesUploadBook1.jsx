import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
    selectIsWorkBookDataLoaded
} from "../../../../state/features/workBookData/selectors";
import { setWorkBookDataThunkCreator } from "../../../../state/features/workBookData/thunkCreators";

export const FilesUploadBook1 = () => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const dispatch = useDispatch();
    const isBook1DataLoaded = useSelector(selectIsWorkBookDataLoaded);                                      // загружны ли данные по текущему проезду в стейт
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------




    // // ------------------------------------ Declare функцию вызывающуюся при загрузке файла ------------------------------------------------
    // const onBookSelect = (evt) => {
    //     debugger
    //     let workBookData;                                    // возвращаем json
    //     const selectedFile = evt.target.files[0];           // выбранный в браузере файл, один, так как запрещен мульти выбор файлов

    //     if (selectedFile) {                                 // если файл был выбран. эта проверка чтобы если пользователь нажал кнопку выбрать файл а потом закрыл окно с выбором файла не выбрав его
    //         let reader = new FileReader();
    //         reader.readAsBinaryString(selectedFile);
    //         reader.onload = function (event) {

    //             const data = event.target.result;
    //             const workBook = XLSX.read(data, {
    //                 type: 'binary'
    //             });

    //             const workSheetOtstDataObj = workBook.Sheets["Отступления"];
    //             const workSheetOtstDataJson = XLSX.utils.sheet_to_json(workSheetOtstDataObj);

    //             const workSheetOcKmDataObj = workBook.Sheets["Оценка КМ"];
    //             const workSheetOcKmDataJson = XLSX.utils.sheet_to_json(workSheetOcKmDataObj);


    //             workBookData = {
    //                 otstSheetData: workSheetOtstDataJson,
    //                 ocKmSheetData: workSheetOcKmDataJson
    //             }

    //             dispatch(setWorkBookDataThunkCreator(workBookData));
    //         };

    //         reader.onerror = function (event) {
    //             workBookData = null
    //             console.error("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
    //         };
    //     }
    // }
    // // ------------------------------------ / Declare функцию вызывающуюся при загрузке файла ----------------------------------------------



    // ------------ Пропсы которые будем передавать в Upload Ant Design, тут и метод при изменении аплоада, то есть загрузки файла ------------
    const props = {
        // name: 'file',
        // action: null,
        // headers: {
        //     authorization: 'authorization-text',
        // },
        onChange(evt) {
            let workBookData;                                    // возвращаем json
            const selectedFile = evt.fileList[0].originFileObj;           // выбранный в браузере файл, один, так как запрещен мульти выбор файлов

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


                    workBookData = {
                        otstSheetData: workSheetOtstDataJson,
                        ocKmSheetData: workSheetOcKmDataJson
                    }

                    dispatch(setWorkBookDataThunkCreator(workBookData));
                };

                reader.onerror = function (event) {
                    workBookData = null
                    console.error("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
                };
            }
        },
    };
    // ------------ / Пропсы которые будем передавать в Upload Ant Design, тут и метод при изменении аплоада, то есть загрузки файла ----------



    return (
        <>
            <div className="content__input-item">
                {
                    isBook1DataLoaded
                        ? <>
                            <h2>Данные по текущему периоду успешно загружены</h2>
                        </>
                        : <>
                            <h2>Данные по текущему периоду не загружены, сначала загрузите данные</h2>
                            <Upload {...props}>
                                <Button type="primary" icon={<UploadOutlined />}>Загрузить файл</Button>
                            </Upload>
                            {/* <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} /> */}
                            {/* <Button type="primary" icon={<UploadOutlined />} htmlType="file">Загрузить файл</Button> */}
                        </>
                }
            </div>
        </>
    );
}