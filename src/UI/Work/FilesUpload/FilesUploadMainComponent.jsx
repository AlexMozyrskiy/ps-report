import React from "react";
import { FilesUploadBook1 } from "./FilesUploadBook1";
import { FilesUploadBook2 } from "./FilesUploadBook2";

export const FilesUploadMainComponent = () => {
    return (
        <>
            <h2>Files Upload</h2>

            <FilesUploadBook1 />
            
            <FilesUploadBook2 />
        </>
    );
}