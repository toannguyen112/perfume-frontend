import React, { Fragment } from "react";
import { FieldInterface } from "../../Interface";
import Field from "./Field";

function FieldSet({
  field,
  updateModelValue,
  modelValue }: FieldInterface) {
  return (
    <Field field={field}
      updateModelValue={updateModelValue}
      modelValue={modelValue} />
  );
}

export default FieldSet;
