import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX from "xlsx/dist/xlsx.full.min";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
    selectIsWorkBook3DataLoaded
} from "../../../state/features/workBook3Data/selectors";
import { setWorkBook3DataThunkCreator } from "../../../state/features/workBook3Data/thunkCreators";

export const FilesUploadBook3 = () => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const dispatch = useDispatch();
    const isBook3DataLoaded = useSelector(selectIsWorkBook3DataLoaded);                                      // загружны ли данные по текущему проезду в стейт
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    // ---------------------------------------- Пропсы которые будем передавать в Upload Ant Design ----------------------------------------
    const props = {
        name: 'file',
        // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        // headers: {
        //     authorization: 'authorization-text',
        // },
        onChange(evt) {
            let worBookData;                                    // возвращаем json
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


                    worBookData = {
                        otstSheetData: workSheetOtstDataJson,
                        ocKmSheetData: workSheetOcKmDataJson
                    }

                    dispatch(setWorkBook3DataThunkCreator(worBookData));
                };

                reader.onerror = function (event) {
                    worBookData = null
                    console.error("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
                };
            }
        },
    };
    // ---------------------------------------- / Пропсы которые будем передавать в Upload Ant Design --------------------------------------


    return (
        <>
            <div className="content__input-item">
                {
                    isBook3DataLoaded
                        ? <>
                            <h2>Данные по предыдущему периоду успешно загружены</h2>
                        </>
                        : <>
                            <h2>Данные по предыдущему периоду не загружены, сначала загрузите данные.
                                Например если сейчас период Апрель контрольный загрузите суюда файл с данными по Апрелю рабочему</h2>
                            <Upload {...props}>
                                <Button type="primary" icon={<UploadOutlined />}>Загрузить файл</Button>
                            </Upload>
                            {/* <input style={{ color: "green" }} type="file" onChange={(e) => onBookSelect(e)} /> */}
                        </>
                }
            </div>
        </>
    );
}