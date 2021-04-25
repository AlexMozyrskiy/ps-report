import React from "react";
import { FilesUploadBook1 } from "./FilesUploadBook1";
import { FilesUploadBook2 } from "./FilesUploadBook2";
import { FilesUploadBook3 } from "./FilesUploadBook3";

export const FilesUploadGeometryMainComponent = () => {
    return (
        <>
            <h2>Geometry Files Upload</h2>

            <FilesUploadBook1 />
            
            <FilesUploadBook2 />

            <FilesUploadBook3 />
        </>
    );
}