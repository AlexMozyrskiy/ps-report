import { Form, Input, Button } from 'antd';
import React from "react";
import { replaceCommasWithPeriodsInANumber } from "../../../../helpers/common/replaceCommasWithPeriodsInANumber/replaceCommasWithPeriodsInANumber";

export const CommonTest = () => {
    const [form] = Form.useForm();
    const [inputValue, setInputValue] = React.useState("");


    const onButtonClick = () => {
        console.log(replaceCommasWithPeriodsInANumber(inputValue));
    }

    return (
        <>
            <Form
                layout="inline"
                form={form}
            >
                <Form.Item label="Field B">
                    <Input placeholder="input placeholder" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={onButtonClick}>Submit</Button>
                </Form.Item>
            </Form>
            <Button type="primary" onClick={() => onButtonClick()}>Ckick Me</Button>
        </>
    );
}