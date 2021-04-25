import { Button } from "antd";
import React from "react";
import { replaceCommasWithPeriodsInANumber } from "../../../../helpers/common/replaceCommasWithPeriodsInANumber/replaceCommasWithPeriodsInANumber";

export const CommonTest = () => {

    const onButtonClick = () => {
        console.log(replaceCommasWithPeriodsInANumber("asd"));
    }

    return (
        <>
            <Button type="primary" onClick={() => onButtonClick()}>Ckick Me</Button>
        </>
    );
}