import { Button } from "antd";
import React from "react";

export const Time = () => {

    const onButtonClick = () => {
        const currentTimeStamp = Date.now();
        // const time = date.getTime();
        // console.log(currentTimeStamp);
        const tergetTimeStamp = 1619195898564 + 60000;
        if(currentTimeStamp > tergetTimeStamp) {
            console.log(1619195898564 + 1296000000);
            // const targetTimeStamp = 1620491898564;      // через 15 суток
            // 1296000000 - 15 суток
        }
    }

    return (
        <>
            <Button type="primary" onClick={onButtonClick}>Ckick Me</Button>
        </>
    );
}