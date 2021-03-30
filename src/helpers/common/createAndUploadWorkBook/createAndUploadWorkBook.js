/* Функция получает данные - тип как в стейте, преобразует их в массив массивов для записи в книгу и предлагает пользователю эту книгу скачать */
import XLSX from "xlsx/dist/xlsx.full.min";

/*
    принимаемые параметры:
    data - массив объектов - тип как в стейте,
    bookName - название создаваемой книги,
    sheetName - название создаваемого листа
*/

export function createAndUploadWorkBook(data, bookName, sheetName) {
    if(!Array.isArray(data)) {
        console.error("Переданные Вами данные данные в функцию creatrAndUploadWorkBook() не явлются массивом");
        return alert ("Переданные Вами данные данные в функцию creatrAndUploadWorkBook() не явлются массивом");
    }

    const wb = XLSX.utils.book_new();                                   // созыдадим новую пустую книгу

    const ws = XLSX.utils.aoa_to_sheet(data);                    // создадим лист

    XLSX.utils.book_append_sheet(wb, ws, sheetName);                    // добавим в созданную книгу лист

    XLSX.writeFile(wb, bookName);                                       // запишем файл xlsx и передадим его для сохранения пользователю
}