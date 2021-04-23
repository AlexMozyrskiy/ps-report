export const selectIsTermsOfUseButtonClicked = (state) => {
    return state.termsOfUse.isTermsOfUseButtonClicked;
}

export const selectIsUserAgreesWithTermsOfUse = (state) => {
    return state.termsOfUse.isUserAgreesWithTermsOfUse;
}

export const selectTargetTimeStamp = (state) => {
    return state.termsOfUse.targetTimeStamp;
}