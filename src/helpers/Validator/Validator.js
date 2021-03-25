export function Validator(value, { required = false, notNumberNull = false, isInteger = false, isPositive = false, isNumber = false }) {

    this.validatePoints = { required, notNumberNull, isInteger, isPositive, isNumber }    // соберем все в 1 объект для удобства
    this.value = value;                                             // валидируемое значение


    this.validate = function () {
        let returnedObject = {          // если пройдем валидацию не попав ни в один кейс вернем этот объект
            isValidate: true,
            message: ""
        };

        // ----------------- поле обязательно для заполнения ---------------------
        if (this.validatePoints.required) {                             // если в объекте пришедшем при создании функции указано required: true, валидируем на обязательность заполнения поля
            if (this.value === "" || this.value === null) {
                returnedObject = {
                    isValidate: false,
                    message: "Это поле обязательно для заполнения"
                };
                return returnedObject;
            }
        }
        // ----------------- / поле обязательно для заполнения -------------------


        // ----------------- проверка на то, чтобы валидируемое значение было числом ---------------------
        if (this.validatePoints.isNumber) {                             // если в объекте пришедшем при создании функции указано isPositive: true, валидируем на то, что число это число
            if (Number.isNaN(Number(value))) {
                returnedObject = {
                    isValidate: false,
                    message: "Значение в этом поле должно быть числом"
                };
                return returnedObject;
            }
        }
        // ----------------- / проверка на то, чтобы валидируемое значение было числом -------------------


        // ----------------- проверка на то, чтобы валидируемое значение !== 0 ---------------------
        if (this.validatePoints.notNumberNull) {                             // если в объекте пришедшем при создании функции указано notNumberNull: true, валидируем на не равенствот его 0
            if (Number(this.value) === 0) {
                returnedObject = {
                    isValidate: false,
                    message: "Значение в этом поле не может быть равным 0"
                };
                return returnedObject;
            }
        }
        // ----------------- / проверка на то, чтобы валидируемое значение !== 0 -------------------


        // ----------------- проверка на то, чтобы валидируемое значение !== 0 ---------------------
        if (this.validatePoints.isInteger) {                             // если в объекте пришедшем при создании функции указано isInteger: true, валидируем на то, что число целое
            if (!Number.isInteger(Number(this.value))) {
                returnedObject = {
                    isValidate: false,
                    message: "Значение в этом поле должно быть целым числом"
                };
                return returnedObject;
            }
        }
        // ----------------- / проверка на то, чтобы валидируемое значение !== 0 -------------------


        // ----------------- проверка на то, чтобы валидируемое значение было положительным числом ---------------------
        if (this.validatePoints.isPositive) {                             // если в объекте пришедшем при создании функции указано isPositive: true, валидируем на то, что число положительное
            if (Number(this.value) < 0) {
                returnedObject = {
                    isValidate: false,
                    message: "Значение в этом поле должно быть положительным"
                };
                return returnedObject;
            }
        }
        // ----------------- / проверка на то, чтобы валидируемое значение было положительным числом -------------------

        return returnedObject;
    }
}