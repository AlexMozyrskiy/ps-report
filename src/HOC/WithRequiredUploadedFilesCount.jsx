/*
    Если пользователь не выбрал дату за которую готовим отчет или не загрузил нужные файлы выдадим ему на странице Алерт
*/
import React from "react";
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import { selectIsWorkBookDataLoaded } from "../state/features/workBookData/selectors";
import { selectIsWorkBook2DataLoaded } from "../state/features/workBook2Data/selectors";
import { selectIsWorkBook3DataLoaded } from "../state/features/workBook3Data/selectors";
import { selectIsVideoBookDataLoaded } from "../state/features/videoBookData/selectors";


export const WithRequiredUploadedFlesCount = (props) => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const isBook1DataLoaded = useSelector(selectIsWorkBookDataLoaded);                       // загружны ли данные в стейт
    const isBook2DataLoaded = useSelector(selectIsWorkBook2DataLoaded);                       // загружны ли данные в стейт
    const isBook3DataLoaded = useSelector(selectIsWorkBook3DataLoaded);                       // загружны ли данные в стейт
    const isVideoBookDataLoaded = useSelector(selectIsVideoBookDataLoaded);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    const {
        requireUploadTrackGeomуtryFilesCount,               // для работы с этим отчетом требуется загрузить количество файлов по геометрии
        requireUploadVideoFilesCount,                       // для работы с этим отчетом требуется загрузить количество файлов по видео
        reportForDate,
        Component                                           // компонент
    } = { ...props };

    // Если не выбрана дата для отчета
    if (reportForDate === "") {
        return <Alert message="Не выбрана дата для отчета. Выберите дату во вкладке &ldquo;Настройки и установки&rdquo; &rarr; &ldquo;Основные настройки&rdquo;" type="error" showIcon />
    }

    if (requireUploadTrackGeomуtryFilesCount === 1 && requireUploadVideoFilesCount === 1) {
        if (isBook1DataLoaded && isVideoBookDataLoaded) {
            return <Component {...props} />
        } else if (!isBook1DataLoaded && isVideoBookDataLoaded) {
            return (
                <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
            );
        } else if (isBook1DataLoaded && !isVideoBookDataLoaded) {
            return (
                <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными по видео &ldquo;Видео.xlsx&rdquo;. Загрузите файл &ldquo;Видео.xlsx&rdquo; во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
            );
        } else if (!isBook1DataLoaded && !isVideoBookDataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными по видео &ldquo;Видео.xlsx&rdquo;. Загрузите файл &ldquo;Видео.xlsx&rdquo; во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        }
    }

    // если в пропсах передали, что чтобы работать с отчетом надо загрузить 1 файл по геометрии (текущий период) и 0 файлов по видео (для этого отчета видео не нужно):
    if (requireUploadTrackGeomуtryFilesCount === 1 && requireUploadVideoFilesCount === 0) {
        if (isBook1DataLoaded) {
            return <Component {...props} />
        } else if (!isBook1DataLoaded) {
            return (
                <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
            );
        }
    }



    // если в пропсах передали, что чтобы работать с отчетом надо загрузить 2 файла по геометрии (текущий период и предыдущий период)
    // и 0 файлов по видео (для этого отчета видео не нужно):
    if (requireUploadTrackGeomуtryFilesCount === 2 && requireUploadVideoFilesCount === 0) {
        if (isBook1DataLoaded && isBook2DataLoaded) {
            return <Component {...props} />
        } else if (!isBook1DataLoaded && !isBook2DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за предыдущий период. Загрузите файл с данными за предыдущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        } else if (isBook1DataLoaded && !isBook2DataLoaded) {
            return (
                <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за предыдущий период. Загрузите файл с данными за предыдущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
            );
        } else if (!isBook1DataLoaded && isBook2DataLoaded) {
            return (
                <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
            );
        }
    }



    // если в пропсах передали, что чтобы работать с отчетом надо загрузить 3 файла по геометрии (текущий период и предыдущий период)
    // и 0 файлов по видео (для этого отчета видео не нужно):
    if (requireUploadTrackGeomуtryFilesCount === 3 && requireUploadVideoFilesCount === 0) {
        if (isBook1DataLoaded && isBook2DataLoaded && isBook3DataLoaded) {
            return <Component {...props} />
        } else if (!isBook1DataLoaded && !isBook2DataLoaded && !isBook3DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за предыдущий период. Загрузите файл с данными за предыдущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за позапрошлый период. Загрузите файл с данными за позапрошлый период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        } else if (isBook1DataLoaded && !isBook2DataLoaded && !isBook3DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за предыдущий период. Загрузите файл с данными за предыдущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за позапрошлый период. Загрузите файл с данными за позапрошлый период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        } else if (!isBook1DataLoaded && isBook2DataLoaded && !isBook3DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за позапрошлый период. Загрузите файл с данными за позапрошлый период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        } else if (!isBook1DataLoaded && !isBook2DataLoaded && isBook3DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за предыдущий период. Загрузите файл с данными за предыдущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        } else if (isBook1DataLoaded && isBook2DataLoaded && !isBook3DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за позапрошлый период. Загрузите файл с данными за позапрошлый период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        } else if (!isBook1DataLoaded && isBook2DataLoaded && isBook3DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за текущий период. Загрузите файл с данными за текущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        } else if (isBook1DataLoaded && !isBook2DataLoaded && isBook3DataLoaded) {
            return (
                <>
                    <Alert message="Для работы с этим отчетом необходимо загрузить файл с данными за предыдущий период. Загрузите файл с данными за предыдущий период во вкладке &ldquo;Загрузка Файлов&rdquo; &rarr; &ldquo;ГРК&rdquo;" type="error" showIcon />
                </>
            );
        }
    }
}