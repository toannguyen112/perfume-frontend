import React, { Fragment, useEffect, useState } from "react";
import { FieldInterface } from "../../Interface";
import CustomEditor from "../Tnymce/CustomEditor";
import Select from "./Select";
import SelectSource from "./SelectSource";

export default function Field({
  field,
  updateModelValue,
  modelValue }: FieldInterface) {

  const [fieldId, setFieldId] = useState<string>('');

  useEffect(() => {
    setFieldId(Math.random().toString(36).substring(7));
  }, [])

  return (
    <Fragment>
      <label
        htmlFor={field.placeholder}
        className="font-bold text-gray-700 text-[14px] mb-[4px] block"
      >
        {field.title} {field.required && <span className="text-red-500">*</span>}
      </label>

      {(() => {

        if (field.type === undefined
          || field.type === "text"
          || field.type === "password"
          || field.type === "number"
          || field.type === "datetime-local"
          || field.type === "date"
          || field.type === "time") {
          return <input
            id={fieldId}
            value={modelValue}
            onChange={(e) => updateModelValue(e.target.value)} type={field.type} className={field.className ?? "input"} placeholder={field.placeholder} disabled={field.disable} />;
        }

        if (field.type === "select_source") {
          return <SelectSource field={field} />;
        }

        if (field.type === "select") {
          return <Select
            updateModelValue={(value) => updateModelValue(value)}
            modelValue={modelValue}
            field={field} />;
        }

        if (field.type === "rich_text") {
          return <CustomEditor
            emit={(value) => updateModelValue(value)}
            modelValue={modelValue}
          />;
        }

      })()}
    </Fragment>
  );
}
