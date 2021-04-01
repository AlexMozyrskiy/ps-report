export const selectVideoBookData = (state) => {
    return state.videoBookData.videoSheetData;
}

export const selectIsVideoBookDataLoaded = (state) => {
    return state.videoBookData.isVideoBookDataLoaded;
}

export const selectIsVideoBookDataLoading = (state) => {
    return state.videoBookData.isVideoBookDataLoading;
}