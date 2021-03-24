import React from "react";
import { useSelector } from "react-redux";
import { selectKmChecked } from "../../state/features/workBookData/selectors";

export const ReselectTesting = () => {

  const kmCheckd = useSelector(selectKmChecked);

  return (
    <>
      
    </>
  );
}