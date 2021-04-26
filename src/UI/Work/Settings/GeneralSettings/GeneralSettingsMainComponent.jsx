import React from "react";
import { GeneralSettingsDatePicker } from "./GeneralSettingsDatePicker";
import { GeneralSettingsInspectionArea } from "./GeneralSettingsInspectionArea";
import { GeneralSettingsWagonNameInputForm } from "./GeneralSettingsWagonNameInputForm";

export const GeneralSettingsMainComponent = () => {
    return (
        <>
            <h2>General Settings</h2>

            <GeneralSettingsDatePicker />

            <GeneralSettingsWagonNameInputForm />

            <GeneralSettingsInspectionArea />
        </>
    );
}