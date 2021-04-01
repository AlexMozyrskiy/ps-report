/*
    Функуия принимает DB из этого проекта и по коду направления и километру определяет название станции/перегона и возвращает нахвание
*/

export function getStationNameByKmAndDirection(DB, directionCode, doubleKm) {
    // найдем в DB объект с информацией о станции или перегоне где мы находимся
    const stationObject = DB.stationBoundaries.find(el => {
        const parseDirectionCode = el.direction.match(/\d\d\d\d\d/);         // распарсим из свойства direction в DB код направления для сравнения его с текущим кодом в item

        return +doubleKm > +el.startCoordinate && +doubleKm <= +el.endCoordinate && +directionCode === +parseDirectionCode[0];
    });
    const stationName = typeof stationObject === 'undefined' ? "" : stationObject.station;  // название станции или перегона, если не нашли в базе совпадений, не нашли нужную станцию будут "", если нашли будет станция из базы

    return stationName;
}