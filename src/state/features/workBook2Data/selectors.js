import { createSelector } from "reselect";
import DB from "../../../DB/DB";
import { getRegionNumberByPchNumber } from "../../../helpers/common/getRegionNumberByPchNumber/getRegionNumberByPchNumber";
import { getUniqueNumbersFromArr } from "../../../helpers/common/getUniqueNumbersFromArr/getUniqueNumbersFromArr";
import { getUniquePch } from "../../../helpers/common/getUniquePch/getUniquePch";
import { sheetOtstConst, sheetOcKmConst } from "../../../CONSTS/sheetsHeaderConsts";
import { createThirdAndFourthDegreesAoA } from "../../../helpers/UI/aoaCreators/thirdAndFourthDegreesAoaCreator/createThirdAndFourthDegreesAoA";
import { calculateMagnitudeN } from "../../../helpers/common/calculateMagnitudeN/calculateMagnitudeN";
import { createEKASUIReportAoA } from "../../../helpers/UI/aoaCreators/EKASUIReportAoaCreator/createEKASUIReportAoA";
import { createMainTelegramAoA } from "../../../helpers/UI/aoaCreators/mainTelegramAoACreator/mainTelegramAoACreator";

export const selectWorkBook2OtstSheetData = (state) => {
    return state.workBook2Data.otstSheetData;
}

export const selectWorkBook2OcKmSheetData = (state) => {
    return state.workBook2Data.ocKmSheetData;
}

export const selectIsWorkBook2DataLoaded = (state) => {
    return state.workBook2Data.isWorkBook2DataLoaded;
}

export const selectIsWorkBook2DataLoading = (state) => {
    return state.workBook2Data.isWorkBook2DataLoading;
}