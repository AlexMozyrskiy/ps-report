/* Функция возвращает величину Nуч */

export function calculateMagnitudeN (otl, xor, ud, neUd) {
    const specSum = (5*otl + 4*xor + 3*ud - 5*neUd).toFixed(3);
    const sum = (otl + xor + ud + neUd).toFixed(3);
    const result = (specSum / sum).toFixed(1);
    return +result;
}