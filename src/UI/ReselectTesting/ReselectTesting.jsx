import React from "react";
import { useSelector } from "react-redux";
// import XLSX from "xlsx/dist/xlsx.full.min";
// import { definePicketByMeter } from "../../helpers/common/definePicketByMeter/definePicketByMeter";
import { getDirectionByCode } from "../../helpers/common/getDirectionByCode/getDirectionByCode";
import { calculateAllDataForTheReportOtstSheetSmartSelector } from "../../state/features/workBookData/selectors";
export const ReselectTesting = () => {

  const otstSheetCalculatingData = useSelector(calculateAllDataForTheReportOtstSheetSmartSelector);
  debugger

  const writeFile = () => {
    alert(getDirectionByCode("10468as"));
  }

  return (
    <>
      <button onClick={writeFile} >Test Download</button>
    </>
  );
}