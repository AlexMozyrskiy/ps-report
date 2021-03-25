import React from "react";
import XLSX from "xlsx/dist/xlsx.full.min";
import { definePicketByMeter } from "../../helpers/common/definePicketByMeter/definePicketByMeter";
import { getDirectionByCode } from "../../helpers/common/getDirectionByCode/getDirectionByCode";

export const ReselectTesting = () => {

  const writeFile = () => {
    alert(getDirectionByCode("sda"));
  }

  return (
    <>
      <button onClick={writeFile} >Test Download</button>
    </>
  );
}