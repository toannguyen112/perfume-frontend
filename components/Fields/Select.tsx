import React, { useState } from 'react'
import { default as SelectCom } from 'react-select';
import { FieldInterface } from '../../Interface';

function Select({
  field,
  modelValue,
  updateModelValue }:
  FieldInterface) {

  const onChange = (value: any) => {
    updateModelValue(value)
  }

  return (
    <SelectCom
      autoFocus={field.autoFocus ?? false}
      isDisabled={field.isDisabled ?? false}
      isMulti={field.mode === 'multiple' ? true : false}
      value={field.options?.find((item) => item.value === modelValue)}
      onChange={onChange}
      options={field.options ?? []}
    />
  )
}

export default Select