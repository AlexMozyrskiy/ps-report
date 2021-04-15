export const WORK_BOOK_DATA = 'ps-report/workBookData/WORK_BOOK_DATA';
export const IS_WORK_BOOK_DATA_LOADED = 'ps-report/workBookData/IS_WORK_BOOK_DATA_LOADED';      // загрузились ли данные в стейт
export const IS_WORK_BOOK_DATA_LOADING = 'ps-report/workBookData/IS_WORK_BOOK_DATA_LOADING';    // загружаются ли данные по моменту
export const REPORT_FOR_DATE = 'ps-report/workBookData/REPORT_FOR_DATE';                          // пользователь вводит за какую дату надо сделать отчет, нужен для фильтри при расчетах
export const MAKE_CALCULATION = 'ps-report/workBookData/MAKE_CALCULATION';                      // производить ли расчет в селекторе, будет переключаться на true в момент нажатия пользователем кнопки загрузить какой-либо отчет, и обратно на false  вмомент окончания загрузки отчета