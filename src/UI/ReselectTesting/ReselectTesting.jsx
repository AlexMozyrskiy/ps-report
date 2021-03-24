import React from "react";
import XLSX from "xlsx/dist/xlsx.full.min";
import { definePicketByMeter } from "../../helpers/common/definePicketByMeter/definePicketByMeter";

export const ReselectTesting = () => {

  const writeFile = () => {
    alert(definePicketByMeter("2d222"));
  }

  return (
    <>
      <button onClick={writeFile} >Test Download</button>
    </>
  );
}