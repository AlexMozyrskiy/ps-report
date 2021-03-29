/* Функция возвращает величину Nуч */

export function calculateMagnitudeN (otl, xor, ud, neUd) {

    function sum() {
        return otl + xor + ud + neUd;
    }

    if (sum() === 0) {              // если пришли нулевые значения километров вернем оценку 0, чтобы не делить на 0 потом
        return 0;
    }

    const specSum = (5*otl + 4*xor + 3*ud - 5*neUd).toFixed(3);
    const kilometersSum = (sum()).toFixed(3);
    const result = (specSum / kilometersSum).toFixed(1);
    return +result;
}